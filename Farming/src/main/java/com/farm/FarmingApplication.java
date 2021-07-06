package com.farm;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class FarmingApplication {
	private static Logger log = Logger.getLogger(FarmingApplication. class);

	public static void main(String[] args) {
		BasicConfigurator.configure();
		SpringApplication.run(FarmingApplication.class, args);
		log.info("Application Started");
		
	}

}
