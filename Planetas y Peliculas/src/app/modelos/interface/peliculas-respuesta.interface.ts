import { Peliculas } from './peliculas.interface';

export interface PeliculasRespuesta {
    count: number;
    next?: any;
    previous?: any;
    results: Peliculas[];
}