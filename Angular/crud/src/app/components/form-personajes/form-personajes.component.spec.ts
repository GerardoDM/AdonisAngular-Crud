import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPersonajesComponent } from './form-personajes.component';

describe('FormPersonajesComponent', () => {
  let component: FormPersonajesComponent;
  let fixture: ComponentFixture<FormPersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
