import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { Router } from '@angular/router';
import {EmpallageService} from "../../service/empallage.service";
@Component({
  selector: 'app-update-emballage',
  templateUrl: './update-emballage.component.html',
  styleUrl: './update-emballage.component.css'
})
export class UpdateEmballageComponent {
  updateEmballageForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: EmpallageService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateEmballageForm = this.fb.group({
      type_emballage: [null, [Validators.required]], // Form control for the product name with required validation
      taille: [null, [Validators.required]], // Form control for the product description with required validation
      point: [null, [Validators.required]], // Form control for the product price with required validation
      cout: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      effecacite: [null, [Validators.required]]
    })

    this.getEmballageById();


  }
  getEmballageById(){
    this.service.getEmpallageById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateEmballageForm.patchValue(res);
    })
  }
  updateEmaballage(){
    this.service.updateEmpallage(this.id,this.updateEmballageForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/listemballages");
      }
    })
  }
}
