import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import {FormControl,ReactiveFormsModule,FormGroup} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,CommonModule,HomepageComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

  signinform=new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  isViewVisible = false;

  constructor(
    private authservice:AuthenticationService,
    private router: Router
  ){}
  signinsubmit(){
    const signindata=this.signinform.value;
    if(this.authservice.verifysignindata(signindata)){
      this.isViewVisible = true; 
      console.log('signin successfull');
      this.router.navigate(['/home']);
    }else{
      console.log('invalid');
      this.isViewVisible = false;
    }
  }
}
