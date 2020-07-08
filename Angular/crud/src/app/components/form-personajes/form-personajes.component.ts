import { Component, OnInit } from '@angular/core';
import { PersonajesService, Personaje} from 'src/app/personajes.service'

import { Router } from '@angular/router'
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-form-personajes',
  templateUrl: './form-personajes.component.html',
  styleUrls: ['./form-personajes.component.css']
})

export class FormPersonajesComponent implements OnInit {

  //Boton edit
  inboundClick = false;

  datos: Personaje = {
    id: null,
    nombre: "",
    raza: "",
    clase:"",
    editMode: false
}

  personajesList : Personaje[]
  

  constructor(private personajes: PersonajesService, private router: Router, private interaccion : InteractionService) { }

  ngOnInit(): void {
    this.getPersonajes()
  
  }

  mandarDatos(datos: Personaje){
    this.interaccion.mandarMensaje(datos)
    
  }

  onSelect(datos : Personaje){
    this.router.navigate(['profile', datos.id, datos.nombre, datos.raza])
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

    makeVisible():void{
      this.inboundClick = true;
      document.getElementById("btnSubmit").setAttribute("disabled", "disabled")
    }

   

    

     

}




