import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {EmpallageService} from "../../service/empallage.service";

@Component({
  selector: 'app-get-all-emballage',
  templateUrl: './get-all-emballage.component.html',
  styleUrl: './get-all-emballage.component.css'
})
export class GetAllEmballageComponent {
  emballages:any=[];
  type_emballage : String="";
  constructor(private empallageService: EmpallageService) { }

  ngOnInit(){

    this.getALlEmpallages();}

  getALlEmpallages() {

    this.empallageService.getAllEmpallage().subscribe((res) => {

      console.log(res);
      this.emballages=res;

    })

  }
  deleteEmpallage(id: number) {

    this.empallageService.deleteEmpallage(id).subscribe((res) => {

      console.log(res);
      this.getALlEmpallages();
    })
  }
  search(){
    this.emballages = this.emballages.filter((res : any) => {
      return res.type_emballage.toLocaleLowerCase().match(this.type_emballage.toLocaleLowerCase());})
  }

}
