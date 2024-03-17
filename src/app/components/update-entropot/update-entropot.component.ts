import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EntroposerviceService} from "../../service/entroposervice.service";

@Component({
  selector: 'app-update-entropot',
  templateUrl: './update-entropot.component.html',
  styleUrl: './update-entropot.component.css'
})
export class UpdateEntropotComponent {
  updateEntropotForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: EntroposerviceService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateEntropotForm = this.fb.group({
      name: [null, [Validators.required]], // Form control for the product name with required validation
      capaciteTotal: [null, [Validators.required]], // Form control for the product description with required validation
      prix: [null, [Validators.required]], // Form control for the product price with required validation
      nombreRayon: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      adress: [null, [Validators.required]], // Form control for the product supplier with required validation
      responsable:[null, [Validators.required]]
    })

    this.getEntropotById();


  }
  getEntropotById(){
    this.service.getEntropotById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateEntropotForm.patchValue(res);
    })
  }
  updateEntropot(){
    this.service.updateEntropot(this.id,this.updateEntropotForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/listentropots");
      }
    })
  }
}
