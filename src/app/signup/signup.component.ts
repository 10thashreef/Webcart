import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, AbstractControl,FormsModule} from '@angular/forms'
import { AuthenticationService } from '../authentication.service'
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet,FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  applyform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])

  },
    { validators: this.passwordMatchValidator })

  constructor(
    private authservice: AuthenticationService,
    private router: Router
  ) { }
  passwordMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {

    const password=group.get('password')?.value;
    const confirmPassword=group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };

  }


  submitform() {
    if (this.applyform.valid) {
    const signupdata = this.applyform.value
    this.authservice.savesignupdata(signupdata);
    console.log('signup succesful', signupdata);
    this.router.navigate(['/home'])
    }else {
      console.log('Form is invalid');
    }
  }

}
