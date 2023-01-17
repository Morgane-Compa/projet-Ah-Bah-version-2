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
      contact_email: ['', [Validators.required,]],
      delivery_firstname: ['', [Validators.required]],
      delivery_name: ['', [Validators.required]],
      delivery_country: ['', [Validators.required]],
      delivery_street: ['', [Validators.required]],
      // delivery_stage: [''],
      delivery_postcode: ['', [Validators.required]],
      delivery_city: ['', [Validators.required]],
      delivery_phone: ['', [Validators.required]],
      card_number: ['', [Validators.required]],
      card_userName: ['', [Validators.required]],
      card_expiration: ['', [Validators.required]],
      card_cvv: ['', [Validators.required]],

    })
  }

  onPay(){
    //this.router.navigate(['/paiement-succes'])
    this.validationError = [];
    console.log(this.paiementForm.value);

    if(this.paiementForm.invalid){
      Object.keys(this.paiementForm.controls).forEach((input)=>{
        const currentInput = this.paiementForm.get(input);
        if(currentInput && currentInput.status === "INVALID"){
          //  this.validationError.push(input);
        }
        console.log(input,currentInput);
      })
      console.log(this.validationError)
    }else{
      this.router.navigate(['/paiement-succes']);
    }
  }


}
