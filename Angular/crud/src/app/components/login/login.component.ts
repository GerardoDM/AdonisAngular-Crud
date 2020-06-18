import { Component, OnInit } from '@angular/core';
import { TokenPaylaod, AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
    credentials: TokenPaylaod = {
        id: 0,
        username: "",
        password: ""
    }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

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
