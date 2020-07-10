import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { StringMap } from '@angular/compiler/src/compiler_facade_interface'
import { User } from './auth.service';
import { environment } from 'src/environments/environment';
import { IMPLICIT_REFERENCE } from '@angular/compiler/src/render3/view/util';
import { ApiPaths } from '../enums/api-paths';
import { EnvService } from './Services/env.service';


 

export interface Personaje {
  id: number
  nombre: string
  raza: string
  clase: string
  editMode : Boolean
}



@Injectable()
export class PersonajesService {


  baseUrl = environment.baseUrl


  constructor(private http:HttpClient, private router:Router, private env: EnvService) { }

  public create(personaje: Personaje): Observable<any>{

    let url = `${this.env.apiUrl}/personajes/create`
    // let url = `/personajes/create`;
    return this.http.post(url, personaje)
  }

  

    public getPersonajes(): Observable<Personaje[]>{
     // let url = `${this.baseUrl}/personajes/index`;
      let url = `${this.env.apiUrl}/personajes/index`

      console.log(url)

      return this.http.get<Personaje[]>(url)
      
    }

    public delete(id: number): Observable<{}>{

      let url = `${this.env.apiUrl}/personajes/index`

    //  let url = `${this.baseUrl}/${ApiPaths.personajes}/delete/${id}`;

     // const url  = `personajes/delete/${id}`
      return this.http.delete(url)

    }

    public edit(personaje: Personaje): Observable<Personaje>{
      let url = `${this.baseUrl}/personajes/update/${personaje.id}`;

     // const url  = `personajes/update/${personaje.id}`
      return this.http.patch<Personaje>(url, personaje)
    }

    public show(personaje: Personaje): Observable<Personaje>{
      let url = `${this.baseUrl}/personajes/show/${personaje.id}`;

      //const url  = `personajes/show/${personaje.id}`
      return this.http.get<Personaje>(url)
    }
}
