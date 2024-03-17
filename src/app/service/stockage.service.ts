import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASIC_URL=["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class StockageService {
  constructor(private http:HttpClient) { }
  postStockage(stockage: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api2/stockage",stockage);
  }
  getAllStockage():Observable<any>{
    return this.http.get(BASIC_URL+"/api2/stockages");
  }
  getStockageById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api2/stockage/"+id);
  }
  updateStockage(id : number,stockage: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api2/stockage/"+id,stockage);
  }
  deleteStockage(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api2/stockage/"+id);
  }
}
