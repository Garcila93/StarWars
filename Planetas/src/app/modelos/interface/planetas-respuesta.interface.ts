import { Planeta } from './planetas.interface';

export interface PlanetResponse {
    count: number;
    next: string;
    previous?: any;
    results: Planeta[];
}