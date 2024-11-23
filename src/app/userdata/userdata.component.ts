import { Component, inject } from '@angular/core';
import { AuthenticationService} from '../authentication.service';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-userdata',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent {
  data:any
  service:AuthenticationService=inject(AuthenticationService)

  constructor(){
  this.data=this.service.senddata()
  console.log(this.data);
  
  }
  
}
 