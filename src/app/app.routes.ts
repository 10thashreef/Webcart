import { Routes } from '@angular/router';
import{SigninComponent} from './signin/signin.component'
import {SignupComponent} from './signup/signup.component'
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'homepage',component:HomepageComponent},
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    {path:'productdetails',component:ProductdetailsComponent}

];
