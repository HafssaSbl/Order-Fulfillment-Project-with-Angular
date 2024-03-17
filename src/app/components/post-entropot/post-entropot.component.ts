import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {EntroposerviceService} from "../../service/entroposervice.service";

@Component({
  selector: 'app-post-entropot',
  templateUrl: './post-entropot.component.html',
  styleUrl: './post-entropot.component.css'
})
export class PostEntropotComponent {
  postEntropotForm!: FormGroup;// Declare the FormGroup variable

  constructor(private entroposerviceService: EntroposerviceService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.postEntropotForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation
      capaciteTotal: [null, [Validators.required]], // Form control for the product description with required validation
      prix: [null, [Validators.required]], // Form control for the product price with required validation
      nombreRayon: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      adress: [null, [Validators.required]], // Form control for the product supplier with required validation
      responsable:[null, [Validators.required]]
    });
  }
  postentropot(){
    console.log(this.postEntropotForm.value);
    this.entroposerviceService.postEntropot(this.postEntropotForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/listentropots");}
    )}
}
