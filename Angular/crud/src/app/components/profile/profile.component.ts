import { Component, OnInit, Pipe } from '@angular/core';
import { Personaje, PersonajesService } from 'src/app/personajes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InteractionService } from 'src/app/interaction.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { WeaponService, Weapon } from 'src/app/Services/weapon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   

  datos: Personaje = {
    id: null,
    nombre: "",
    raza: "",
    clase:"",
    editMode: false
}

  datosWeapon : Weapon = {
    object_id : null,
    name : "",
    type : "",
    userID: null
  }


weaponsList : Weapon[]

 
  constructor(private personajes: PersonajesService, private route : ActivatedRoute, private router: Router, private interaccion: InteractionService, private Sweapon: WeaponService) { }

  ngOnInit() :void {


    this.datos.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.datos.nombre = this.route.snapshot.paramMap.get('nombre')
    this.datos.raza = this.route.snapshot.paramMap.get('raza')




    //this.datos.nombre = this.route.snapshot.paramMap.get('nombre')
    //this.datos.raza = this.route.snapshot.paramMap.get('raza')
    



     

   
    this.interaccion.mensajePadre.subscribe(
      mensaje => {

        this.datos = mensaje;
        
          console.log(this.datos.nombre)
          console.log(this.datos.raza)
          console.log(mensaje)
          
          console.log(mensaje.nombre) 
          this.showWeapons()
          this.setValue()
        
         // this.bring()

      }
      
    )
    
  }

  createWeapon(){
    this.Sweapon.create(this.datosWeapon).subscribe(() =>

    this.showWeapons(),
       
    err => {
      console.error(err)
  }

    )

  }


  bring(){

    this.Sweapon.showWeapons(this.datos.id).subscribe(() =>

    this.showWeapons(),
        
      err => {
          console.error(err)
      }
  
    )
      
  } 


  showWeapons(): void{
    this.Sweapon.showWeapons(this.datos.id).subscribe(weaponsList => ( this.weaponsList = weaponsList))
    console.log(this.datos.nombre)

  }


  setValue(){
    this.datosWeapon.userID = this.datos.id
  }

  


   
 



}
