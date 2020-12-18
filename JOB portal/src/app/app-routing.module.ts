import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyformComponent } from './applyform/applyform.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'applyform/:company',component: ApplyformComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'NotFound', component: PagenotfoundComponent  },
  { path: '**', redirectTo:'/NotFound'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
