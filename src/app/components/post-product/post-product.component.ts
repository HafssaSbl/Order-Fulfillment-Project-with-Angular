import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
   styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {
  postProductForm!: FormGroup;// Declare the FormGroup variable

  constructor(private productService: ProductService, private fb: FormBuilder,
  private router : Router) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.postProductForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation
      description: [null, [Validators.required]], // Form control for the product description with required validation
      prix: [null, [Validators.required]], // Form control for the product price with required validation
      quantite_en_stock: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      fournisseur: [null, [Validators.required]], // Form control for the product supplier with required validation
       date_ajout:[null, [Validators.required]]
    });
  }
  postproduct(){
  console.log(this.postProductForm.value);
  this.productService.postProduct(this.postProductForm.value).subscribe((res)=>{
  console.log(res);
  this.router.navigateByUrl("/listproducts");}
  )}
}
