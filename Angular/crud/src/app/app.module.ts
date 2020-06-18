import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AuthService } from './auth.service';
import { PersonajesService } from './personajes.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormPersonajesComponent } from './components/form-personajes/form-personajes.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { AuthGuardService } from './auth-guard.service';

const routes:Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'form', component: FormPersonajesComponent},
  { path: '**', component: LoginComponent },
  { path: '/', component: LoginComponent  }



]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    FormPersonajesComponent
  ],
  exports: [

    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    FormPersonajesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuardService, PersonajesService,{
    provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
