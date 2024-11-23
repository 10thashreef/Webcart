import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Type } from '../type';
import { CommonModule,TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule,TitleCasePipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
recievedData:Type[]=[]
showDetails:any
isFavourite:boolean=false
cartdata:any

constructor(private service:AuthenticationService){
  this.recievedData=history.state.id;
  console.log('id',this.recievedData);
  this.showDetails=this.service.returnData(this.recievedData)
  console.log(this.showDetails); 
}
toggleFavorite(){  
  this.isFavourite = !this.isFavourite;
}
addtocart(id:any){
 this.cartdata=this.service.cartdetails(id)
}
}
