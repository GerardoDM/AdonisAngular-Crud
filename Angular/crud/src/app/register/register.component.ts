import { Component, OnInit } from '@angular/core'
import {AuthService, TokenPaylaod} from '../auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    credentials: TokenPaylaod = {
        id: 0,
        username: "",
        password: ""
    }

    ngOnInit() {
      
      }

    constructor(private auth: AuthService, private router: Router){}

    login(){
        this.auth.register(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/dashboard')

            },
            err => {
                console.error(err)
            }
        )
    }

}