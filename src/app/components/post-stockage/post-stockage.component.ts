import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {StockageService} from "../../service/stockage.service";

@Component({
  selector: 'app-post-stockage',
  templateUrl: './post-stockage.component.html',
  styleUrl: './post-stockage.component.css'
})
export class PostStockageComponent {
  postStockageForm!: FormGroup;// Declare the FormGroup variable

  constructor(private stockageService: StockageService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.postStockageForm = this.fb.group({
      quantite_entrant: [null, [Validators.required]], // Form control for the product name with required validation
      //quantite_sortant: [null, [Validators.required]], // Form control for the product description with required validation
      //quantite_Actuel: [null, [Validators.required]], // Form control for the product price with required validation
      fourniseur: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      product: [null, [Validators.required]],

    });
  }
  postStockage(){
    console.log(this.postStockageForm.value);
    this.stockageService.postStockage(this.postStockageForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/liststockages");}
    )}
}
