import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {StockageService} from "../../service/stockage.service";

@Component({
  selector: 'app-get-all-stockage',
  templateUrl: './get-all-stockage.component.html',
  styleUrl: './get-all-stockage.component.css'
})
export class GetAllStockageComponent {
  stockages:any=[];
  quantite_entrant : String="";
  constructor(private stockageService: StockageService) { }

  ngOnInit(){

    this.getALlStockages();}

  getALlStockages() {

    this.stockageService.getAllStockage().subscribe((res) => {

      console.log(res);
      this.stockages=res;

    })

  }
  deleteStockage(id: number) {

    this.stockageService.deleteStockage(id).subscribe((res) => {

      console.log(res);
      this.getALlStockages();
    })
  }
  search(){
    this.stockages = this.stockages.filter((res : any) => {
      return res.quantite_entrant.toLocaleLowerCase().match(this.quantite_entrant.toLocaleLowerCase());})
  }
}
