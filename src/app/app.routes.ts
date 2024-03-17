import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';


export const routes: Routes = [
  { path: 'nav', component: NavbarComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
