import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const BASIC_URL=["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 constructor(private http:HttpClient) { }
  postProduct(product: any): Observable<any> {
  return this.http.post(BASIC_URL + "/api/product",product);
  }
  getAllProduct():Observable<any>{
  return this.http.get(BASIC_URL+"/api/products");
  }
  getProductById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api/product/"+id);
    }
  updateProduct(id : number,product: any):Observable<any>{
        return this.http.put(BASIC_URL+"/api/product/"+id,product);
    }
    deleteProduct(id : number):Observable<any>{
            return this.http.delete(BASIC_URL+"/api/product/"+id);
        }
}
