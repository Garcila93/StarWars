import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlanetasService } from './services/planetas.service';
import { PlanetasListadoComponent } from './planetas-listado/planetas-listado.component';
import { PeliculasListadoComponent } from './peliculas-listado/peliculas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetasListadoComponent,
    PeliculasListadoComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }