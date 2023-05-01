package daw.proyecto.angular.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PeliculaRepository extends CrudRepository<Pelicula, Long>{
    List<Pelicula> findByTitulo(String titulo);
}
