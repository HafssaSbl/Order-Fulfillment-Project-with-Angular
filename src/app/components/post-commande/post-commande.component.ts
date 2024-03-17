import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CommandeService} from "../../service/commande.service";

@Component({
  selector: 'app-post-commande',
  templateUrl: './post-commande.component.html',
  styleUrl: './post-commande.component.css'
})
export class PostCommandeComponent {
  postCommandeForm!: FormGroup;// Declare the FormGroup variable

  constructor(private commandeService: CommandeService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.postCommandeForm = this.fb.group({
      nameClient: [null, [Validators.required]], // Form control for the product name with required validation
      num_tel: [null, [Validators.required]], // Form control for the product description with required validation
      adress: [null, [Validators.required]], // Form control for the product price with required validation
      Quantit_produit: [null, [Validators.required]]
    });
  }
  postCommande(){
    console.log(this.postCommandeForm.value);
    this.commandeService.postCommande(this.postCommandeForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/listcommandes");}
    )}
}
