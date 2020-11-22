import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PeliculasRespuesta } from '../modelos/interface/peliculas-respuesta.interface';
import { Observable } from 'rxjs';

const authURL = "https://swapi.dev/api/films/";

const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PeliculasService{

  constructor(private http: HttpClient) {
  
  }
 
   getPeliculas(): Observable<PeliculasRespuesta> {
     return this.http.get<PeliculasRespuesta>( authURL, requestOptions );
  }
 
}