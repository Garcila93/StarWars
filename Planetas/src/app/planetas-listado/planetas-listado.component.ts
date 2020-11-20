import { Component, OnInit } from '@angular/core';
import { Planeta } from '../modelos/interface/planetas.interface';
import { PlanetasService } from '../services/planetas.service';

@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.css']
})
export class PlanetasListadoComponent implements OnInit {
  listadoPlanetas: Planeta[];
  columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'];

  constructor(private planetService: PlanetasService) { }

  ngOnInit() {
    this.loadPlanets();
  }

  loadPlanets() {
    this.planetService.getPlanets().subscribe(resp => {
      this.listadoPlanetas = resp.results;
    });
  }

}