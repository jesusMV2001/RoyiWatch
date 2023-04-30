package daw.proyecto.angular.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import daw.proyecto.angular.model.Pelicula;
import daw.proyecto.angular.model.PeliculaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PeliculasController {
    private final PeliculaRepository peliculaRepository;

    public PeliculasController(PeliculaRepository peliculaRepository) {
        this.peliculaRepository = peliculaRepository;
    }

    @GetMapping("/peliculas")
    public List<Pelicula> getPeliculas() {
        return (List<Pelicula>) peliculaRepository.findAll();
    }

    @PostMapping("/form")
    @ResponseBody
    void addPelicula(@RequestBody Pelicula p) {
        System.out.println("asdasda:"+p.getTitulo());
        peliculaRepository.save(p);
    }

    @GetMapping("/detalle/{id}")
    public Pelicula detallePelicula( long id) {
        return (Pelicula) peliculaRepository.findById(id).get();
    }
}
