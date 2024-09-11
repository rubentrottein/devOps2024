package tp.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
        System.setProperty("spring.profiles.default" , "reinit,h2"); //profils activés par défaut au démarrage de l'appli
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("http://localhost:8181/demo");
	}

}
