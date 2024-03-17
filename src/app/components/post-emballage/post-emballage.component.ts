import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { Router } from '@angular/router';
import {EmpallageService} from "../../service/empallage.service";

@Component({
  selector: 'app-post-emballage',
  templateUrl: './post-emballage.component.html',
  styleUrl: './post-emballage.component.css'
})
export class PostEmballageComponent {
  postEmballageForm!: FormGroup;// Declare the FormGroup variable

  constructor(private empallageService: EmpallageService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {
    // Initialize the form in the ngOnInit lifecycle hook
    this.postEmballageForm = this.fb.group({
      type_emballage: [null, [Validators.required]], // Form control for the product name with required validation
      taille: [null, [Validators.required]], // Form control for the product description with required validation
      point: [null, [Validators.required]], // Form control for the product price with required validation
      cout: [null, [Validators.required]], // Form control for the product quantity in stock with required validation
      effecacite: [null, [Validators.required]]
    });
  }
  postEmballage(){
    console.log(this.postEmballageForm.value);
    this.empallageService.postEmpallage(this.postEmballageForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/listemballages");}
    )}
}
