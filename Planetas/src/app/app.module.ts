import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlanetasService } from './services/planetas.service';
import { PlanetsListadoComponent } from './planets-listado/planets-listado.component';
import { PlanetasListadoComponent } from './planetas-listado/planetas-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    PlanetasListadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [PlanetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }