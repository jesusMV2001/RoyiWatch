import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pelicula } from '../model/pelicula';
import { Observable } from 'rxjs';

@Injectable()
export class PeliculasService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/peliculas';
  }

  public findAll(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.usersUrl);
  }

  
}
