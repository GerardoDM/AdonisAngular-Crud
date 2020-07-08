import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';
import { PersonajesService } from './personajes.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormPersonajesComponent } from './components/form-personajes/form-personajes.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { AuthGuardService } from './auth-guard.service';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { WeaponService } from './Services/weapon.service';
import { ProfileComponent } from './components/profile/profile.component';
import { InteractionService } from './interaction.service';

const routes:Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'weapons', component: WeaponsComponent},
  {path: "profile/:id/:nombre/:raza", component: ProfileComponent},
  { 
    path: 'form', component: FormPersonajesComponent,
    canActivate: [AuthGuardService] 

    
  },
  
  { path: '**', component: LoginComponent },
  



]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    FormPersonajesComponent,
    WeaponsComponent,
    ProfileComponent
  ],
  exports: [

    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    FormPersonajesComponent,
    WeaponsComponent,
    ProfileComponent

  ],

  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    

  ],
  providers: [AuthService, AuthGuardService, InteractionService , WeaponService, JwtHelperService, PersonajesService,{
    provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
  }, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
