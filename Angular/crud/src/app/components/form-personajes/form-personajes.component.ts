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
    clase:"",
    editMode: false
}

  personajesList : Personaje[]

  constructor(private personajes: PersonajesService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonajes()
  }

  create(){

    if (this.datos.editMode = true){
      return this.personajes.edit(this.datos).subscribe()
    }

    else{
      
      
      this.personajes.create(this.datos).subscribe(

        
        err => {
            console.error(err)
        }
        
       
    )

    this.datos.id = null
    this.datos.nombre = ""
    this.datos.raza = ""
    this.datos.clase = ""



    }
    
    // this.personajes.create(this.datos).subscribe(() => this.getPersonajes())
}

  getPersonajes(): void{
    this.personajes.getPersonajes().subscribe(personajesList => ( this.personajesList = personajesList))

    }

    delete(datos: Personaje): void {
      this.personajesList = this.personajesList.filter(h => h !== datos)
      this.personajes.delete(datos.id).subscribe(() => console.log('datos borrados'))
      console.log(datos.id)
    }

    edit(personaje : Personaje){
      this.datos = personaje
      this.datos.editMode = true
    }


  }




