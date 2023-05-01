package daw.proyecto.angular.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pelicula {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(nullable = false, unique = true)
    private String titulo;
    private String fecha;
    
    public Pelicula(){
        this.titulo="";
        this.fecha="";
    }

    public Pelicula(String titulo, String fecha){
        this.titulo=titulo;
        this.fecha=fecha;
    }
    
    public long getId(){
        return id;
    }

    public String getTitulo(){
        return titulo;
    }

    public String getFecha(){
        return fecha;
    }

    public void setTitulo(String titulo){
        this.titulo = titulo;
    }

    public void setFecha(String fecha){
        this.fecha = fecha;
    }

    public void setId(long id){
        this.id = id;
    }
}
