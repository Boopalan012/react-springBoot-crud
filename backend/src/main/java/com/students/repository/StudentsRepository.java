package com.students.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.students.entity.Students;

@Repository
public interface StudentsRepository extends JpaRepository<Students, Integer> {
//    @Query("SELECT DISTINCT students FROM Students LEFT JOIN students.addresses")
	@Query("SELECT DISTINCT s FROM Students s LEFT JOIN s.address a")
	List<Students> findAllWithAddresses();
	 

    

}
