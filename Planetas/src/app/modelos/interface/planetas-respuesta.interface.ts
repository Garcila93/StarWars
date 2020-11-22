import { Planeta } from './planetas.interface';

export interface PlanetaRespuesta {
    count: number;
    next: string;
    previous?: any;
    results: Planeta[];
}