import { Component } from '@angular/core'
import {AuthService, TokenPaylaod} from '../auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    credentials: TokenPaylaod = {
        id: 0,
        username: "",
        password: ""
    }

    constructor(private auth: AuthService, private router: Router){}

    login(){
        this.auth.login(this.credentials).subscribe(
            () => {
                this.router.navigateByUrl('/dashboard')

            },
            err => {
                console.error(err)
            }
        )
    }

}