import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
}
