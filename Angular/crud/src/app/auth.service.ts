import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt';

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
    constructor (private http:HttpClient, private router:Router, private jwtHelper: JwtHelperService){}

        private guardarToken(token: string): void {
            localStorage.setItem('token', token)
            this.token = token
        }

        public isAuthenticated(): boolean {
            const token = localStorage.getItem('token');
            // Check whether the token is expired and return
            // true or false
            return !this.jwtHelper.isTokenExpired(token);
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

        public logout(): void{
            this.token = ""
            window.localStorage.removeItem('token')
            this.router.navigateByUrl('login')
        }

    
}