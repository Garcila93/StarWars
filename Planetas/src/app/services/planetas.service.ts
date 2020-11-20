  
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../modelos/interface/planetas.interface';
import { PlanetaRespuesta } from '../modelos/interface/planetas-respuesta.interface';


const authURL = 'https://swapi.co/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor(private http: HttpClient) {  
  }

  public getPlanets(): Observable<PlanetaRespuesta> {
    return this.http.get<PlanetaRespuesta>(
      authURL,
      requestOptions
    );
  }
}