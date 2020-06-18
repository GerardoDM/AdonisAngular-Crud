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

  constructor(private personajes: PersonajesService, private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.personajes.create(this.datos).subscribe(
        

        
        err => {
            console.error(err)
        }
    )
}



}
