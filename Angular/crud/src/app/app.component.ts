import { Component, OnInit } from '@angular/core';
import { AuthService, User } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  detalles: User 
  
  title = 'crud';

  constructor(public auth: AuthService){}

  ngOnInit(): void {
    const current = this.auth.getDetalles()
    this.auth.getUser(current.id).subscribe(
      user => {
        this.detalles = user

      },
      err => {
        console.log(err)
      }
    )

    console.log(this.auth.getDetalles())

  }
}
