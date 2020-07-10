import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt';


import { StringMap } from '@angular/compiler/src/compiler_facade_interface'
import { ApiPaths } from 'src/enums/api-paths'
import { environment } from 'src/environments/environment'
import { EnvService } from './Services/env.service'

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

    baseUrl = environment.baseUrl
    private token: string
    constructor (private http:HttpClient, private router:Router, private jwtHelper: JwtHelperService, private env: EnvService){}

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

        public getDetalles(): User {
            const token = this.getToken()
    
            let payload
            if(token){
                payload = token.split('.')[1]
                 payload = window.atob(payload)
            
                return JSON.parse(payload)
            }

            else{
                return null
                
            }

        }

        public register(user: TokenPaylaod): Observable<any>{
            let url = `${this.baseUrl}/users/register`;

            return this.http.post(url, user)
        }

        public login(user: TokenPaylaod): Observable<any>{
            let url = `${this.baseUrl}/users/login`;

            const base = this.http.post(url, user)

          //  const base = this.http.post('users/login', user)

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

         public getUser(id): Observable<any>{

             return this.http.get(`users/show/${id}`)
         }

        
    
}