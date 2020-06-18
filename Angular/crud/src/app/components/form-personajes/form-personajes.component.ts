import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje} from 'src/app/personajes.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-form-personajes',
  templateUrl: './form-personajes.component.html',
  styleUrls: ['./form-personajes.component.css']
})
export class FormPersonajesComponent implements OnInit {

  datos: Personaje = {
    id: 0,
    nombre: "",
    raza: "",
    clase:""
}

  personajesList : Personaje[]

  constructor(private personajes: PersonajesService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonajes()
  }

  create(){
    this.personajes.create(this.datos).subscribe(

        
        err => {
            console.error(err)
        }
        
        
    )

    // this.personajes.create(this.datos).subscribe(() => this.getPersonajes())
}

  getPersonajes(): void{
    this.personajes.getPersonajes().subscribe(personajesList => ( this.personajesList = personajesList))

    }

    delete(datos: Personaje): void {
      this.personajesList = this.personajesList.filter(h => h !== datos)
      this.personajes.delete(datos.id)
    }
  }




