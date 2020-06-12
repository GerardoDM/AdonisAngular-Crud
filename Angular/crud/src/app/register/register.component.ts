import { Component } from '@angular/core'
import {AuthService, TokenPaylaod} from '../auth.service'
import { Router } from '@angular/router'

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    credentials: TokenPaylaod = {
        id: 0,
        username: "",
        password: ""
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