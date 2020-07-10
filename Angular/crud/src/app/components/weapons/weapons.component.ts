import { Component, OnInit } from '@angular/core';



import { Router } from '@angular/router'
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Weapon, WeaponService } from 'src/app/Services/weapon.service';
import { Personaje } from 'src/app/personajes.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  inboundClick = false;

  datos: Weapon = {
    _id: "",
    name: "",
    type: "",
    userID: null,
    editMode: false
   
    
}

datosPersonaje: Personaje = {
  id: null,
  nombre: "",
  raza: "",
  clase:"",
  editMode: false
}

weaponsList : Weapon[]

  constructor(private weapons: WeaponService, private router: Router) { }

  ngOnInit(): void {
    this.getWeapons()

  }



  getWeapons(): void{
    this.weapons.getWeapons().subscribe(weaponsList => ( this.weaponsList = weaponsList))

  }

  create(){

    this.weapons.create(this.datos).subscribe(() =>
  
    this.getWeapons(),
          
      err => {
            console.error(err)
      }
        
    )
    
  } 

  update(){

    this.weapons.edit(this.datos).subscribe(() =>

    this.getWeapons(),
        
      err => {
          console.error(err)
      }
      
    )

  }

  delete(datos: Weapon): void {
    this.weaponsList = this.weaponsList.filter(h => h !== datos)
    this.weapons.delete(datos._id).subscribe(() => console.log('datos borrados'))
    console.log(datos._id)
  }

  edit(weapon : Weapon){
    this.datos = weapon
    this.datos.editMode = true
    console.log(this.datos.editMode)

  }

  makeVisible():void{
    this.inboundClick = true;
    document.getElementById("btnSubmit").setAttribute("disabled", "disabled")
  }

  
  resetForm(form: NgForm){
           
    form.resetForm(); // or form.reset();
    
  }

  

}
