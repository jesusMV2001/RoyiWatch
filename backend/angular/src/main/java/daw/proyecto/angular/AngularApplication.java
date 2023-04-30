package daw.proyecto.angular;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import daw.proyecto.angular.model.Pelicula;
import daw.proyecto.angular.model.PeliculaRepository;

@SpringBootApplication
public class AngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularApplication.class, args);
	}

	@Bean
    CommandLineRunner init(PeliculaRepository userRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                Pelicula user = new Pelicula(name, name.toLowerCase() + "@domain.com");
                userRepository.save(user);
            }); 
        };
	}

}
