import { Routes } from '@angular/router';
import{SigninComponent} from './signin/signin.component'
import {SignupComponent} from './signup/signup.component'
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserdataComponent } from './userdata/userdata.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildCComponent } from './child-c/child-c.component';

export const routes: Routes = [
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'homepage',component:HomepageComponent},
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    {path:'productdetails',component:ProductdetailsComponent},
 
    {path:'', component:HomepageComponent},
    {path:'userdata-combonant',component:UserdataComponent,children:[
        {path:'child-a',component:ChildAComponent},
        {path:'child-b',component:ChildBComponent},
        {path:'child-c',component:ChildCComponent},
       ]},
       
        {path:'',redirectTo:'/userdata-combonant', pathMatch:'full'}

];
