import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasListadoComponent } from './planetas-listado.component';

describe('PlanetasListadoComponent', () => {
  let component: PlanetasListadoComponent;
  let fixture: ComponentFixture<PlanetasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetasListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
