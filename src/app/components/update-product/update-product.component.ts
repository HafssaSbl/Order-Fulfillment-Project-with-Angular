import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { ProductService} from '../../service/product.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
updateProductForm!: FormGroup
id: number=this.activatedRoute.snapshot.params["id"];
constructor(private activatedRoute: ActivatedRoute,
 private service: ProductService,
 private fb: FormBuilder,
 private router : Router){}

 ngOnInit(){
  this.updateProductForm = this.fb.group({
       name: [null, [Validators.required]], // Form control for the product name with required validation
       description: [null, [Validators.required]], // Form control for the product description with required validation
       prix: [null, [Validators.required]], // Form control for the product price with required validation
       quantite_en_stock: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
       fournisseur: [null, [Validators.required]], // Form control for the product supplier with required validation
        date_ajout:[null, [Validators.required]]
     })

 this.getProductById();


 }
 getProductById(){
 this.service.getProductById(this.id).subscribe((res)=>{
 console.log(res);
 this.updateProductForm.patchValue(res);
 })
 }
 updateProduct(){
  this.service.updateProduct(this.id,this.updateProductForm.value).subscribe((res)=>{
  console.log(res);
  if(res.id!=null)
{  this.router.navigateByUrl("/listproducts");
}
 })
}
}
