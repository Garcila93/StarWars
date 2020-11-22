import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../modelos/interface/peliculas.interface';
import {PeliculasService} from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss']
})
export class PeliculasListadoComponent implements OnInit {

  listadoPeliculas: Peliculas[]=[]

  columnsToDisplay = ['title', 'episode_id','opening_crawl','director','producer','release_date'];
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.loadPeliculas();
  }

  loadPeliculas() {
    this.peliculasService.getPeliculas().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });

}
}
