package com.students.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.students.entity.Address;
import com.students.entity.Students;
import com.students.repository.AddressRepository;
import com.students.repository.StudentsRepository;
import com.students.service.StudentsService;

@RestController
public class StudentsController {
	@Autowired
	private StudentsService service;
	@Autowired
	private AddressRepository addressRepo;
	@Autowired
	private StudentsRepository stu;
	

	// get all student
	@GetMapping("/students")
	private List<Students> getAllStudents() {
		List<Students> students = service.findAll();
		return students;
	}

	// post
	@PostMapping("/students")
	private List<Students> saveStudents(@RequestBody List<Students> students) {
		
		for (Students student : students) {
			Students saveStudent = service.saveStudents(student);
			
		}
		return students;
		
	}

	// get by id
	@GetMapping("/students/{count}")
	private Optional<Students> getStudentById(@PathVariable("count") Integer id) {
		Optional<Students> students = service.findById(id);
		return students;
	}

	// delete by id
	@DeleteMapping("/students/{id}")
	private String deleteStudentById(@PathVariable("id") Integer id) {
		String deleted = service.deleteStudentById(id);
		System.out.println(deleted);
		return deleted;

	}

	// delete all
	@DeleteMapping("/students")
	private String deleteAll() {
		service.deleteAllStudent();
		return "Deleted";
	}

	// update student
	@PutMapping("/students/{id}")
	private Students saveStudentsBy(@PathVariable("id") Integer id, @RequestBody Students students) {
		students.setId(id);
		Students updateStudent = service.updateStudentById(students);
			return updateStudent;
	}
	@PostMapping("/students/{id}")
	private Students savesStudentsBy(@PathVariable("id") Integer id, @RequestBody Students students) {
		students.setId(id);
		Students updateStudent = service.updateStudentById(students);
			return updateStudent;
	}
	
	@DeleteMapping("/address/{id}")
	private String deleteStudentAddress (@PathVariable("id") Integer count) {
		addressRepo.deleteById(count);
		return "Deleted";
	}
	@GetMapping("/students/query/{query}")
	private List<Students> getByQuery( @PathVariable("query") String query) {
		String que="SELECT s FROM Students s WHERE s.name LIKE CONCAT('%',:query, '%'";
		List<Students> result=stu.findAll();
		return result;
	}
	@GetMapping("/EditAddress/{id}")
	private Optional<Address> editAddress(@PathVariable("id") Integer count) {
		Optional<Address> add=addressRepo.findById(count);
		return add;
	}
	@PutMapping("/EditAddress/{id}")
	private Address updateAddress(@PathVariable("id") Integer id,@RequestBody Address address) {
		Address updateAddress=addressRepo.findById(id).get();
		updateAddress.setDoorno(address.getDoorno());
		updateAddress.setStreet(address.getStreet());
		updateAddress.setDistrict(address.getDistrict());
		updateAddress.setState(address.getState());
		addressRepo.save(updateAddress);
		return updateAddress;
		
	}


}
