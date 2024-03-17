import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CommandeService} from "../../service/commande.service";

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrl: './update-commande.component.css'
})
export class UpdateCommandeComponent {
  updateCommandeForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: CommandeService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateCommandeForm = this.fb.group({
      nameClient: [null, [Validators.required]], // Form control for the product name with required validation
      num_tel: [null, [Validators.required]], // Form control for the product description with required validation
      adress: [null, [Validators.required]], // Form control for the product price with required validation
      Quantit_produit: [null, [Validators.required]]
    })

    this.getCommandeById();


  }
  getCommandeById(){
    this.service.getCommandeById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateCommandeForm.patchValue(res);
    })
  }
  updateCommande(){
    this.service.updateCommande(this.id,this.updateCommandeForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/listcommandes");
      }
    })
  }
}
