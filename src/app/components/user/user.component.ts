import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Iuser } from '../../models/iuser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  userData: Iuser[] = [];
  loading: boolean = true; // Add loading indicator

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: Iuser[]) => {
        this.userData = data;
        this.loading = false; // Set loading to false when data is fetched
      },
      error: (error) => {
        console.error('There was an error!', error);
        this.loading = false; // Ensure loading is set to false even if there's an error
      }
    });
  }
}
