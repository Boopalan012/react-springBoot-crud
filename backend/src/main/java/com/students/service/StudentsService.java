package com.students.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.students.entity.Address;
import com.students.entity.Students;
import com.students.repository.StudentsRepository;

@Service
public class StudentsService {
	@Autowired
	private StudentsRepository studentsrepository;

	// save
	public Students saveStudents(Students students) {
		Students student = null;
		// TODO Auto-generated method stub
		if (students.getAddress() != null) {
			for (Address address : students.getAddress()) {
				address.setStudents(students);
			}
			student = studentsrepository.save(students);
		}
		return student;

	}

	// get all
	public List<Students> findAll() {
		// TODO Auto-generated method stub
		List<Students> students = studentsrepository.findAllWithAddresses();
		return students;
	}

	// delete
	public String deleteStudentById(Integer id) {
		// TODO Auto-generated method stub
		studentsrepository.deleteById(id);
		;
		return "Student Deleted";
	}

	// delete all
	public void deleteAllStudent() {
		// TODO Auto-generated method stub
		studentsrepository.deleteAll();

	}

	// get one
	public Optional<Students> findById(Integer id) {
		// TODO Auto-generated method stub
		Optional<Students> students = studentsrepository.findById(id);
		return students;
	}

	// update by id
	public Students updateStudentById(Students students) {
		// TODO Auto-generated method stub
		Students updateStudents=studentsrepository.findById(students.getId()).get();
		System.out.println("service-> update");
		updateStudents.setName(students.getName());
		updateStudents.setPassword(students.getPassword());
		updateStudents.setEmail(students.getEmail());
		updateStudents.setCity(students.getCity());
		if (students.getAddress() != null) {
			for (Address address : students.getAddress()) {
				address.setStudents(students);
			}
		}
		updateStudents.setAddress(students.getAddress());
		studentsrepository.save(updateStudents);
		return updateStudents;
	}

	
}
