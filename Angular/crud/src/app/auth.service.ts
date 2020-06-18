import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { StringMap } from '@angular/compiler/src/compiler_facade_interface'

export interface User {
    id: number
    username: string
    password: string
}

interface Token {
    token: string
}

export interface TokenPaylaod {
    id: number
    username: string
    password: string
}

@Injectable()
export class AuthService{
    private token: string
    constructor (private http:HttpClient, private router:Router){}

        private guardarToken(token: string): void {
            localStorage.setItem('token', token)
            this.token = token
        }

        public getToken(): string {
            if (!this.token){
                this.token = localStorage.getItem('token')

            }

            return this.token
        }

        public register(user: TokenPaylaod): Observable<any>{
            return this.http.post('users/register', user)
        }

        public login(user: TokenPaylaod): Observable<any>{
            const base = this.http.post('users/login', user)

            const request = base.pipe(
                map((data: Token) => {
                    if(data.token){
                        this.guardarToken(data.token)
                    }

                    return data
                })
            )

            return request
        }

    
}