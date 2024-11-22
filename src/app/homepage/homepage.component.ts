import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule,TitleCasePipe } from '@angular/common';
import { AuthenticationService } from "../authentication.service";
import { Type } from '../type';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,TitleCasePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  productdetails:Type[]=[]
  productdetails2:Type[]=[]
  productdetails3:Type[]=[]
  productdetails4:Type[]=[]
  productdetails5:Type[]=[]

  
constructor(
  private authservice:AuthenticationService,
  private router:Router ){

    this.productdetails=this.authservice.productdetails().products1
    this.productdetails2=this.authservice.productdetails().product2
    this.productdetails3=this.authservice.productdetails().product3
    this.productdetails4=this.authservice.productdetails().product4
    this.productdetails5=this.authservice.productdetails().product5 
  }

logout(){
  this.authservice.logout();
  console.log('logged out success');
  this.router.navigate(['/signin'])
}
navigateToDetails() {
  this.router.navigate(['/productdetails']);

}
}
