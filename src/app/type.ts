export interface Type {
    id:number,
    name:string,
    price:number,
    reviews:number,
    ratings:number,
    rated:number,
    axis:number,
    hdfc:number
    emi:number,
    warranty:number

    photo:string,
}
export interface CartItem {
    product: { id: number; name: string }; 
    quantity: number;
  }

