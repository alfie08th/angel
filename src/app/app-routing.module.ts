import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {InflationCalculatorComponent} from "./inflation-calculator/inflation-calculator.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inflation', component: InflationCalculatorComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

