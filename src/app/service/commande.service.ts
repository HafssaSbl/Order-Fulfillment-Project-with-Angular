import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASIC_URL=["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }
  postCommande(commande: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api4/commande",commande);
  }
  getAllCommande():Observable<any>{
    return this.http.get(BASIC_URL+"/api4/commandes");
  }
  getCommandeById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api4/commande/"+id);
  }
  updateCommande(id : number,commande: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api4/commande/"+id,commande);
  }
  deleteCommande(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api4/commande/"+id);
  }
}
