package com.students.Configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class StudentsConfiguration implements WebMvcConfigurer{
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// TODO Auto-generated method stub
	registry.addMapping("/**")
	.allowedOrigins("http://localhost:3000")
	.allowedMethods("GET","POST","DELETE","PUT")
	.allowedHeaders("*");
	}

}
