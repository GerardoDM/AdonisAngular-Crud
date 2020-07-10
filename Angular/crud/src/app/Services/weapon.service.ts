import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { StringMap } from '@angular/compiler/src/compiler_facade_interface'
import { User, AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../personajes.service';

export interface Weapon {
  _id: String
  name: string
  type: string
  userID: number
  editMode: Boolean
  
}



@Injectable()
export class WeaponService {

  constructor(private http:HttpClient, private router:Router) { }

  public create(weapon: Weapon): Observable<any>{
    return this.http.post('weapons/store', weapon)
  }

  public getWeapons(): Observable<Weapon[]>{
    return this.http.get<Weapon[]>('weapons/index')
  }

   public showWeapons( number: Number): Observable<Weapon[]>{
    
     return this.http.get<Weapon[]>(`weapons/show/${number}`)
     
  }

  public delete(_id: String): Observable<{}>{

    // let url = `${this.env.apiUrl}/personajes/index`

   //  let url = `${this.baseUrl}/${ApiPaths.personajes}/delete/${id}`;

    // const url  = `personajes/delete/${id}`
     return this.http.delete(`weapons/destroy/${_id}`)

   }

   public edit(weapon: Weapon): Observable<Personaje>{
    //let url = `${this.baseUrl}/personajes/update/${personaje.id}`;

   const url  = `weapons/update/${weapon._id}`
    return this.http.patch<Personaje>(url, weapon)
  }


  

    

    
    



}











  
