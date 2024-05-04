import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  username: string = '';
  password: string = '';
  

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('AccessToken')) {
      // If authenticated, redirect to the dashboard
      this.router.navigate(['/dashboard']);
    }
   }

  onSubmit() {
    this.api.postLogin(
      {
        "email": this.username,
        "password": this.password,
        "twoFactorCode": "string",
        "twoFactorRecoveryCode": "string"
      })
      .subscribe(response => {
        console.log('POST Response:', response);
        localStorage.setItem('AccessToken', response.accessToken)
        this.router.navigate(['/dashboard']);
        // Handle successful response (e.g., display success message)
      }, error => {
        console.error('POST Error:', error);
        // Handle error scenario (e.g., display error message)
      });
  }
}
