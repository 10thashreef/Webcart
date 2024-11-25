import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { ConfirService } from '../confir.service';
import { AuthenticationService } from '../authentication.service';
import { Type } from '../type';


@Component({
  selector: 'app-btnconfirm',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './btnconfirm.component.html',
  styleUrl: './btnconfirm.component.scss'
})
export class BtnconfirmComponent {
  stor:any;
  ftprod:AuthenticationService=inject(AuthenticationService)

  constructor() {
    this.stor=this.ftprod.productdetails().products1;
    console.log(this.stor);

    this.stor=this.ftprod.productdetails().product2;
    console.log(this.stor);

    this.stor=this.ftprod.productdetails().product3;
    console.log(this.stor);

    this.stor=this.ftprod.productdetails().product4;
    console.log(this.stor);

    this.stor=this.ftprod.productdetails().product5;

    console.log(this.stor[0].price);
    
  }
}
