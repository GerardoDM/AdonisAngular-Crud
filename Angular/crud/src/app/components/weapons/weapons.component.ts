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

  datos: Weapon = {
    object_id: "",
    name: "",
    type: "",
    userID: null
   
    
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

  
  resetForm(form: NgForm){
           
    form.resetForm(); // or form.reset();
    
  }

  

}
