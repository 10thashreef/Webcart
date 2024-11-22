import { Injectable } from '@angular/core';
import { Type } from './type';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signupdata: any[] = [];
  data = {
    products1:[
      {
      id:1,
      name:'fasttrack',
      price:10000,
    },
    {
      id:2,
      name:'iphone13',
      price:55000,
    },
    {
      id:3,
      name:'earpod',
      price:15000,
    },
    {
      id:4,
      name:'printer',
      price:75000,
    },
    {
      id:5,
      name:'laptop',
      price:50000,
    },
    {
      id:6,
      name:'television',
      price:50000,
    },] as Type[],
    product2 : [{
      id:6,
      name:'nivea',
      price:10000,
    },
    {
      id:7,
      name:'mat',
      price:55000,
    },
    {
      id:8,
      name:'airfreshner',
      price:15000,
    },
    {
      id:9,
      name:'boat',
      price:75000,
    }] as Type[],
    product3 : [{
      id:10,
      name:'davidoff',
      price:10000,
    },
    {
      id:11,
      name:'fitness',
      price:55000,
    },
    {
      id:12,
      name:'setwet',
      price:15000,
    },
    {
      id:13,
      name:'jacket',
      price:75000,
    }] as Type[],
    product4 : [{
      id:14,
      name:'sofa',
      price:10000,
    },
    {
      id:15,
      name:'mattress',
      price:55000,
    },
    {
      id:16,
      name:'chair',
      price:15000,
    },
    {
      id:17,
      name:'jbl',
      price:75000,
    }] as Type[],
    product5 : [{
      id:18,
      name:'toy',
      price:1000,
    },
    {
      id:19,
      name:'pencil',
      price:5000,
    },
    {
      id:20,
      name:'shoe',
      price:1500,
    },
    {
      id:21,
      name:'shirt',
      price:75000,
    }] as Type[]
  }

  constructor() {
    // Get saved data from localStorage if available
    const saveddata = localStorage.getItem('signupdata');
    if (saveddata) {
      try {
        const parsedData = JSON.parse(saveddata);
        this.signupdata = Array.isArray(parsedData) ? parsedData : []; 
      } catch (error) {
        console.error('Error parsing signup data from localStorage', error);
      }
    }
  }

  savesignupdata(data: any): void {
    console.log('Before push, signupdata:', this.signupdata);
    if (Array.isArray(this.signupdata)) {
      this.signupdata.push(data);
      localStorage.setItem('signupdata', JSON.stringify(this.signupdata));
      console.log('Signup data saved', this.signupdata);
    } else {
      console.error('signupdata is not an array');
    }
  }

  verifysignindata(data: any): boolean {
    console.log('Verifying sign-in data:', data);
    return this.signupdata.some(
      (user) => user.name === data.name && user.password === data.password
    );
  }

  cleardata(): void {
    // Clear only in-memory data, not localStorage
    console.log('Cleared in-memory signup data');
    this.signupdata = [];
  }

  logout(): void {
    console.log('User logged out. Retaining signup data.');
    // localStorage.clear();
  }

  //sending product details
  productdetails(){
    return this.data
    }
}
