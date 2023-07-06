package com.students;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.students.entity.Students;

@SpringBootApplication
public class StudentsApplication {

	public static void main(String[] args) throws JsonProcessingException {
		SpringApplication.run(StudentsApplication.class, args);
		System.out.println("spring boot main");
		Students student = new Students(); // Obtain or create an instance of Students

		ObjectMapper objectMapper = new ObjectMapper();
		String json = objectMapper.writeValueAsString(student);

		System.out.println(json);

	}

}
