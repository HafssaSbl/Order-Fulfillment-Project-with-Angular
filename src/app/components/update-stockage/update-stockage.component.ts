import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {StockageService} from "../../service/stockage.service";

@Component({
  selector: 'app-update-stockage',
  templateUrl: './update-stockage.component.html',
  styleUrl: './update-stockage.component.css'
})
export class UpdateStockageComponent {
  updateStockageForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: StockageService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateStockageForm = this.fb.group({
      quantite_entrant: [null, [Validators.required]], // Form control for the product name with required validation
      quantite_sortant: [null, [Validators.required]], // Form control for the product description with required validation
      quantite_Actuel: [null, [Validators.required]], // Form control for the product price with required validation
      fourniseur: [null, [Validators.required]] // Form control for the product quantity in stock with required validation

    })

    this.getStockageById();
  }


  getStockageById(){
    this.service.getStockageById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateStockageForm.patchValue(res);
    })
  }
  updateStockage(){
    this.service.updateStockage(this.id,this.updateStockageForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/liststockages");
      }
    })
  }
}
