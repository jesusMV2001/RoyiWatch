import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../model/pelicula';
import { Observable } from 'rxjs';

@Injectable()
export class PeliculasService {
  private buscarPorTitulo: string;
  private listaPeliculas: string;
  private peliculaId: string;
  private formulario: string;
  private peliculaTitulo: string;

  constructor(private http: HttpClient) {
    this.peliculaTitulo='http://localhost:8080/detalle/titulo/';
    this.buscarPorTitulo='http://localhost:8080/buscar/';
    this.peliculaId='http://localhost:8080/detalle/id/';
    this.listaPeliculas = 'http://localhost:8080/peliculas';
    this.formulario = 'http://localhost:8080/form';
  }

  public uploadfile(formData:FormData):Observable<any>{
    return this.http.post(this.formulario,formData)
  }

  public findAll(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.listaPeliculas);
  }

  public findById(id: Number){
    return this.http.get<Pelicula>(this.peliculaId+id);
  }

  public findByTitulo(id: String){
    return this.http.get<Pelicula>(this.peliculaTitulo+id);
  }

  public findAllByTitulo(titulo: string){
    return this.http.get<String[]>(this.buscarPorTitulo+titulo);
  }

  public save(user: Pelicula) {
    return this.http.post<Pelicula>(this.formulario, user);
  }
}
