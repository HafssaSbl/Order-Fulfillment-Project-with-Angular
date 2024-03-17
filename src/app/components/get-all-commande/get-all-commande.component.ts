import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {CommandeService} from "../../service/commande.service";

@Component({
  selector: 'app-get-all-commande',
  templateUrl: './get-all-commande.component.html',
  styleUrl: './get-all-commande.component.css'
})
export class GetAllCommandeComponent {
  commandes:any=[];
  nameClient : String="";
  constructor(private commandeService: CommandeService) { }

  ngOnInit(){

    this.getALlCommandes();}

  getALlCommandes() {

    this.commandeService.getAllCommande().subscribe((res) => {

      console.log(res);
      this.commandes=res;

    })

  }
  deleteCommande(id: number) {

    this.commandeService.deleteCommande(id).subscribe((res) => {

      console.log(res);
      this.getALlCommandes();
    })
  }
  search(){
    this.commandes = this.commandes.filter((res : any) => {
      return res.nameClient.toLocaleLowerCase().match(this.nameClient.toLocaleLowerCase());
    })
  }
}
