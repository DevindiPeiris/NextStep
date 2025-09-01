package com.nextstep.MeetingService.controller;

import com.nextstep.MeetingService.dto.MeetingRequest;
import com.nextstep.MeetingService.service.MeetingService;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.EventDataObjectDeserializer;
import com.stripe.model.StripeObject;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.google.gson.Gson;
import com.google.gson.JsonElement;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/stripe")
public class StripeWebhookController {

    @Value("${stripe.webhook-secret}")
    private String endpointSecret;

    private final MeetingService meetingService;

    public StripeWebhookController(MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    @PostMapping("/webhook")
    public ResponseEntity<String> handleStripeEvent(
            @RequestBody String payload,
            @RequestHeader("Stripe-Signature") String sigHeader) {

        Event event;
        try {
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (SignatureVerificationException e) {
            System.out.println("Invalid signature: " + e.getMessage());
            return ResponseEntity.badRequest().body("Invalid signature");
        }

        System.out.println("Event received: " + event.getType());

        if ("checkout.session.completed".equals(event.getType())) {
            EventDataObjectDeserializer deserializer = event.getDataObjectDeserializer();
            Optional<StripeObject> obj = deserializer.getObject();

            if (obj.isPresent()) {
                Session session = (Session) obj.get();  

                Map<String, String> metadata = session.getMetadata();
                System.out.println("Metadata: " + metadata);

                try {
                    Long studentId = Long.parseLong(metadata.get("studentId"));
                    Long counsellorId = Long.parseLong(metadata.get("counsellorId"));
                    Long slotId = Long.parseLong(metadata.get("slotId"));

                    MeetingRequest req = new MeetingRequest();
                    req.setStudentId(studentId);
                    req.setCounsellorId(counsellorId);
                    req.setSlotId(slotId);

                    meetingService.bookMeeting(req);

                    System.out.println("Meeting booked for s=" + studentId
                            + " c=" + counsellorId
                            + " slot=" + slotId);

                } catch (Exception e) {
                    e.printStackTrace();
                    return ResponseEntity.badRequest().body("Booking failed: " + e.getMessage());
                }

            } else {
                System.out.println("Could not deserialize checkout.session.completed into Session");
            }
        }

        return ResponseEntity.ok("Webhook processed");
    }
}