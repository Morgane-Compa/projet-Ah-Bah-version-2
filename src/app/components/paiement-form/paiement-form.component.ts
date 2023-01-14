import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paiement-form',
  templateUrl: './paiement-form.component.html',
  styleUrls: ['./paiement-form.component.css']
})
export class PaiementFormComponent {
  
  paiementForm!: FormGroup;
  router: any;
  validationError: [] = [];

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.paiementForm = this.formBuilder.group({
      contact_email: [null, [Validators.required]],
      delivery_firstname: [null, [Validators.required]],
      delivery_name: [null, [Validators.required]],
      delivery_country: [null, [Validators.required]],
      delivery_street: [null, [Validators.required]],
      // delivery_stage: [null],
      delivery_postcode: [null, [Validators.required]],
      delivery_city: [null, [Validators.required]],
      delivery_phone: [null, [Validators.required]],
      card_number: [null, [Validators.required]],
      card_userName: [null, [Validators.required]],
      card_expiration: [null, [Validators.required]],
      card_cvv: [null, [Validators.required]],

    })
  }

  pay(){
    this.validationError = [];
    console.log(this.paiementForm.value);
    // this.router.navigate(['/paiement-succes'])

    if(this.paiementForm.invalid){
      Object.keys(this.paiementForm.controls).forEach((control)=>{
        const currentInput = this.paiementForm.get(control);
        if(currentInput && currentInput.status === "INVALID"){
          // this.validationError.push(control);
        }
        console.log(control,currentInput);
      })
      console.log(this.validationError)
    }else{
      this.router.navigate(['/paiement-succes']);
    }
  }
}
