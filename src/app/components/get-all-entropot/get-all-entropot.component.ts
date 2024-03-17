import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {EntroposerviceService} from "../../service/entroposervice.service";

@Component({
  selector: 'app-get-all-entropot',
  templateUrl: './get-all-entropot.component.html',
  styleUrl: './get-all-entropot.component.css'
})
export class GetAllEntropotComponent {
  entropots:any=[];
  name : String="";
  constructor(private entroposerviceService:EntroposerviceService) { }

  ngOnInit(){

    this.getALlEntropot();
  }

  getALlEntropot() {

    this.entroposerviceService.getAllEntropot().subscribe((res) => {

      console.log(res);
      this.entropots=res;

    })

  }
  deleteProduct(id: number) {

    this.entroposerviceService.deleteEntropot(id).subscribe((res) => {

      console.log(res);
      this.getALlEntropot();
    })
  }
  search(){
    this.entropots = this.entropots.filter((res : any) => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());})
  }
}
