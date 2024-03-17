import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASIC_URL=["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class EntroposerviceService {
  constructor(private http:HttpClient) { }
  postEntropot(entropot: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api1/entropot",entropot);
  }
  getAllEntropot():Observable<any>{
    return this.http.get(BASIC_URL+"/api1/entropots");
  }
  getEntropotById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api1/entropot/"+id);
  }
  updateEntropot(id : number,entropot: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api1/entropot/"+id,entropot);
  }
  deleteEntropot(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api1/entropot/"+id);
  }
}
