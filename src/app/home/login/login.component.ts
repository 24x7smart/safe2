import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  LoginUser() {
    console.log("here");
    this.authService.loginUser({login: "admin", password: "password"}).subscribe(
      (data) => {
        alert(data.token);
        console.log(data.token);
        localStorage.setItem('token', data.token); // Store JWT token
        this.router.navigate(['/home/launch']); // Navigate to protected page
      },
      (error) => {
        console.log('Login failed');
      }
    );

    //this.router.navigateByUrl('/home/launch');
  }

}
