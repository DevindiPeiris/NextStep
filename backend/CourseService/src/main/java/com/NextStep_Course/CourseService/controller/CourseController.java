package com.NextStep_Course.CourseService.controller;

import com.NextStep_Course.CourseService.dto.CourseDTO;
import com.NextStep_Course.CourseService.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course")
@CrossOrigin
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/getCourse")
    public List<CourseDTO> getCourse() { return courseService.getAllCourses();}

    @PostMapping("/addCourse")
    public CourseDTO saveCourse(@RequestBody CourseDTO courseDTO){
        return courseService.saveCourse(courseDTO);
    }

    @PutMapping("/updateCourse")
    public CourseDTO updateCourse(@RequestBody CourseDTO courseDTO){
        return courseService.updateCourse(courseDTO);
    }

    @DeleteMapping("/deleteCourse")
    public String deleteCourse(@RequestBody CourseDTO courseDTO){
        return courseService.deleteCourse(courseDTO);
    }
}
