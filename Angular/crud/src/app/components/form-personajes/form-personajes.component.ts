import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje} from 'src/app/personajes.service'

import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-personajes',
  templateUrl: './form-personajes.component.html',
  styleUrls: ['./form-personajes.component.css']
})
export class FormPersonajesComponent implements OnInit {

  datos: Personaje = {
    id: null,
    nombre: "",
    raza: "",
    clase:"",
    editMode: false
}

  personajesList : Personaje[]

  constructor(private personajes: PersonajesService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonajes()
    console.log(this.datos.editMode)
  }


  create(){

    this.personajes.create(this.datos).subscribe(() =>

    this.getPersonajes(),
        
      err => {
          console.error(err)
      }
      
  )

    
   } 

    update(){

    this.personajes.edit(this.datos).subscribe(() =>

    this.getPersonajes(),
        
      err => {
          console.error(err)
      }
      
  )

    
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
      console.log(this.datos.editMode)

    }

    resetForm(form: NgForm){
           
      form.resetForm(); // or form.reset();
      
  }

      foo(){

    // document.getElementById( "btnSubmit" ).setAttribute("onclick", function() { runCommand() });
     
    //  $('#btnSubmit').attr('onClick', 'update()');

   
    

    console.log("foo")
  }


  }




