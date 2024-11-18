import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
constructor(
  private authservice:AuthenticationService,
  private router:Router ){}

logout(){
  this.authservice.logout();
  console.log('logged out success');
  this.router.navigate(['/signin'])
}
}
