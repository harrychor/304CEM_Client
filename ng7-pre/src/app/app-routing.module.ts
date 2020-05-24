import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import {RegisterComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'contact', component: ContactComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'profile', component: ProfileComponent },
 { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
