import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personaje } from './personajes.service';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private mensaje = new Subject<Personaje>();

  mensajePadre = this.mensaje.asObservable()

  constructor() { }

  mandarMensaje(mmensaje: Personaje){
    this.mensaje.next(mmensaje)
  }
}
