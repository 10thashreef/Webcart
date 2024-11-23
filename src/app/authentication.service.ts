import { Injectable } from '@angular/core';
import { Type } from './type';
import {CartItem} from './type'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signupdata: any[] = [];
  data = {
    products1: [
      {
        id: 1,
        name: 'fasttrack',
        price: 5000,
        reviews: 27617,
        ratings: 2861,
        rated: 3,
        axis: 5,
        hdfc: 800,
        emi: 1500,
        warranty: 1,
      },
      {
        id: 2,
        name: 'iphone13',
        price: 55000,
        reviews: 88617,
        ratings: 92861,
        axis: 10,
        rated: 4.5,
        hdfc: 600,
        emi: 2500,
        warranty: 1,
      },
      {
        id: 3,
        name: 'earpod',
        price: 1500,
        reviews: 3617,
        ratings: 961,
        rated: 4.3,
        axis: 1,
        hdfc: 800,
        emi: 1000,
        warranty: 1
      },
      {
        id: 4,
        name: 'printer',
        price: 75000,
        reviews: 12617,
        ratings: 1861,
        rated: 4,
        axis: 18,
        hdfc: 300,
        emi: 500,
        warranty: 1,
      },
      {
        id: 5,
        name: 'laptop',
        price: 55000,
        reviews: 56617,
        ratings: 8861,
        rated: 4.1,
        axis: 15,
        hdfc: 500,
        emi: 1000,
        warranty: 1,
      },
      {
        id: 6,
        name: 'television',
        price: 50000,
        reviews: 45617,
        ratings: 8861,
        rated: 4.2,
        axis: 15,
        hdfc: 700,
        emi: 1000,
        warranty: 1
      },] as Type[],
    product2: [{
      id: 7,
      name: 'nivea',
      price: 10000,
      reviews: 5617,
      ratings: 4861,
      rated: 3,
      axis: 3,
      hdfc: 300,
      emi: 500,
      warranty: 1
    },
    {
      id: 8,
      name: 'mat',
      price: 250,
      reviews: 45617,
      ratings: 961,
      rated: 3,
      axis: 1,
      hdfc: 500,
      emi: 1000,
      warranty: 1
    },
    {
      id: 9,
      name: 'airfreshner',
      price: 900,
      reviews: 25617,
      ratings: 1261,
      rated: 4.4,
      axis: 1,
      hdfc: 200,
      emi: 1000,
      warranty: 1
    },
    {
      id: 10,
      name: 'boat',
      price: 1750,
      reviews: 45617,
      ratings: 1361,
      rated: 4,
      axis: 1,
      hdfc: 700,
      emi: 1000,
      warranty: 1
    }] as Type[],
    product3: [{
      id: 11,
      name: 'davidoff',
      price: 3000,
      reviews: 75617,
      ratings: 2961,
      rated: 5,
      axis: 1,
      hdfc: 100,
      emi: 500,
      warranty: 1
    },
    {
      id: 12,
      name: 'fitness',
      price: 55000,
      reviews: 45617,
      ratings: 961,
      rated: 4,
      axis: 1,
      hdfc: 600,
      emi: 1000,
      warranty: 1
    },
    {
      id: 13,
      name: 'setwet',
      price: 500,
      reviews: 4617,
      ratings: 641,
      rated: 3.8,
      axis: 1,
      hdfc: 800,
      emi: 500,
      warranty: 1
    },
    {
      id: 14,
      name: 'jacket',
      price: 2000,
      reviews: 3617,
      ratings: 561,
      rated: 4.1,
      axis: 1,
      hdfc: 700,
      emi: 600,
      warranty: 1
    }] as Type[],
    product4: [{
      id: 15,
      name: 'sofa',
      price: 10000,
      reviews: 65617,
      ratings: 261,
      rated: 4.2,
      axis: 1,
      hdfc: 300,
      emi: 500,
      warranty: 1
    },
    {
      id: 16,
      name: 'mattress',
      price: 55000,
      reviews: 43417,
      ratings: 561,
      rated: 4.2,
      axis: 1,
      hdfc: 400,
      emi: 1000,
      warranty: 1
    },
    {
      id: 17,
      name: 'chair',
      price: 15000,
      reviews: 55617,
      ratings: 961,
      rated: 4.3,
      axis: 1,
      hdfc: 600,
      emi: 600,
      warranty: 1
    },
    {
      id: 18,
      name: 'jbl',
      price: 75000,
      reviews: 6617,
      ratings: 661,
      rated: 4,
      axis: 1,
      hdfc: 300,
      emi: 1000,
      warranty: 1
    }] as Type[],
    product5: [{
      id: 19,
      name: 'toy',
      price: 1000,
      reviews: 5617,
      ratings: 961,
      rated: 4.1,
      axis: 1,
      hdfc: 600,
      emi: 1000,
      warranty: 1
    },
    {
      id: 20,
      name: 'pencil',
      price: 5000,
      reviews: 45617,
      ratings: 961,
      axis: 1,
      rated: 4,
      hdfc: 200,
      emi: 1000,
      warranty: 1
    },
    {
      id: 21,
      name: 'shoe',
      price: 1500,
      reviews: 88617,
      ratings: 851,
      rated: 3.9,
      axis: 1,
      hdfc: 700,
      emi: 1000,
      warranty: 1
    },
    {
      id: 22,
      name: 'shirt',
      price: 75000,
      reviews: 47617,
      ratings: 261,
      rated: 4.4,
      axis: 1,
      hdfc: 600,
      emi: 1000,
      warranty: 1
    }] as Type[]
  }
  cart :CartItem[] = [];
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
  productdetails() {
    return this.data
  }
  
  //check the product id and return the corresponding data
  returnData(id: any) {
    const allProducts = [
      ...this.data.products1,
      ...this.data.product2,
      ...this.data.product3,
      ...this.data.product4,
      ...this.data.product5,
    ];
    return allProducts.find(product => product.id === id) || null;
  }
//retrive the id data and push it into the object cart
cartdetails(id: any) {
    const allProducts = [
      ...this.data.products1,
      ...this.data.product2,
      ...this.data.product3,
      ...this.data.product4,
      ...this.data.product5,
    ];
    const product = allProducts.find(product => product.id === id) || null
    if (product && product.id === id) {
      const cartItem = this.cart.find(item => item.product.id === id);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        this.cart.push({ product: product, quantity: 1 });
      }
      console.log('Updated cart:', this.cart);
    } else {
      console.log('Product not found or ID mismatch:', id);
    }
  }
}


