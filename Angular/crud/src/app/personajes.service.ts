import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { StringMap } from '@angular/compiler/src/compiler_facade_interface'
import { User } from './auth.service';

export interface Personaje {
  id: number
  nombre: string
  raza: string
  clase: string
}

@Injectable()
export class PersonajesService {

  constructor(private http:HttpClient, private router:Router) { }

  public create(personaje: Personaje): Observable<any>{
    return this.http.post('personajes/create', personaje)
}
}
