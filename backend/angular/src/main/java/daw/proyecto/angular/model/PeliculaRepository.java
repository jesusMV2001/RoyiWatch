package daw.proyecto.angular.model;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PeliculaRepository extends CrudRepository<Pelicula, Long>{
    @Query("SELECT p.titulo FROM Pelicula p WHERE lower(p.titulo) LIKE %:value1%")
    List<String> findAllByTitulo(@Param("value1")String value1);

    @Query("SELECT p FROM Pelicula p WHERE p.titulo=:value1")
    Pelicula findByTitulo(@Param("value1")String value1);
}
