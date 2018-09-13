import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './errors/pagenotfound.component';

const routes: Routes = [
  {
    path: 'login', /*** Initial entry point. This goes to the login page */
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '', /*** Not putting anything in directs you back to the / path */
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home', /*** /home goes to HomeComponent */
    component: HomeComponent
  },



  //this must be last
  {
    path: '**', /*** navigates to a 'page not found' custom error. You can choose what to do here */
    component: PagenotfoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
