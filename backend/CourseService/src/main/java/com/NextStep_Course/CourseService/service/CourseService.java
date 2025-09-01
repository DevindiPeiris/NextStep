package com.NextStep_Course.CourseService.service;

import com.NextStep_Course.CourseService.dto.CourseDTO;
import com.NextStep_Course.CourseService.model.Course;
import com.NextStep_Course.CourseService.repository.CourseRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class CourseService {
    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<CourseDTO> getAllCourses(){
        List<Course>courseList = courseRepo.findAll();
        return modelMapper.map(courseList, new TypeToken<List<CourseDTO>>(){}.getType());
    }

    public CourseDTO saveCourse(CourseDTO courseDTO){
        courseRepo.save(modelMapper.map(courseDTO, Course.class));
        return courseDTO;
    }

    public CourseDTO updateCourse(CourseDTO courseDTO){
        courseRepo.save(modelMapper.map(courseDTO, Course.class));
        return courseDTO;
    }

    public String deleteCourse(CourseDTO courseDTO){
        courseRepo.delete(modelMapper.map(courseDTO, Course.class));
        return "Successfully Deleted";
    }

}
