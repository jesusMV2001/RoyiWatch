import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../model/pelicula';
import { Observable } from 'rxjs';

@Injectable()
export class PeliculasService {

  private listaPeliculas: string;
  private formulario: string;

  constructor(private http: HttpClient) {
    this.listaPeliculas = 'http://localhost:8080/peliculas';
    this.formulario = 'http://localhost:8080/form';
  }

  public findAll(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.listaPeliculas);
  }

  public save(user: Pelicula) {
    return this.http.post<Pelicula>(this.formulario, user);
  }
}
