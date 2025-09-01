package com.nextstep.MeetingService.controller;

import com.nextstep.MeetingService.dto.MeetingRequest;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/payments")
public class PaymentController {

    @Value("${stripe.success-url}")
    private String successUrl;

    @Value("${stripe.cancel-url}")
    private String cancelUrl;

    @PostMapping("/create-checkout-session")
    public ResponseEntity<Map<String, Object>> createCheckoutSession(@RequestBody MeetingRequest request) throws StripeException {
        Long amountInCents = 2000L; // test price - replace with counsellor profile price later

        // Debug log to verify slotId is passed
        System.out.println("📌 Creating Stripe Checkout for studentId=" + request.getStudentId() +
                ", counsellorId=" + request.getCounsellorId() +
                ", slotId=" + request.getSlotId());

        // ✅ Put IDs into metadata
        Map<String, String> metadata = new HashMap<>();
        metadata.put("studentId", request.getStudentId().toString());
        metadata.put("counsellorId", request.getCounsellorId().toString());
        metadata.put("slotId", request.getSlotId().toString());

        SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl(successUrl + "?session_id={CHECKOUT_SESSION_ID}")
                .setCancelUrl(cancelUrl)
                .addLineItem(
                        SessionCreateParams.LineItem.builder()
                                .setQuantity(1L)
                                .setPriceData(
                                        SessionCreateParams.LineItem.PriceData.builder()
                                                .setCurrency("usd")
                                                .setUnitAmount(amountInCents)
                                                .setProductData(
                                                        SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                                                .setName("Counselling Session")
                                                                .build()
                                                )
                                                .build()
                                )
                                .build()
                )
                .putAllMetadata(metadata)
                .build();

        Session session = Session.create(params);

        Map<String, Object> response = new HashMap<>();
        response.put("id", session.getId());
        response.put("url", session.getUrl());

        return ResponseEntity.ok(response);
    }
}