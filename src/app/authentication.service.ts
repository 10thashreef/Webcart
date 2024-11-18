import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signupdata: any[] = [];

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
}
