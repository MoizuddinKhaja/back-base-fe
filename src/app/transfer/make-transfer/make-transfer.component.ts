import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service';
@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit {
  popup:boolean = false;
  toAccount:string='';
  amount:number;
  formdata;
  validateAmount:boolean;
  errorMessage:string="This field is mandatory";
  ngOnInit() {
    this.formdata = new FormGroup({
      toAccount: new FormControl( this.toAccount,Validators.required),
      amount: new FormControl(this.amount,Validators.required),
    });
 }
 constructor( private transferService:TransferService){

 }
  submitForm(event){
    event.stopImmediatePropagation();
    event.stopPropagation();


    console.log('event = ',event);

  }

  onClickSubmit(data) {
    console.log(data );

    this.toAccount = data.toAccount;
    this.amount = data.amount;
    if(this.amount && !this.validateAmount){
      this.popup=true;
    }
    else{
      this.popup=false;
    }
  }
  close(event){
    this.popup=false;
  }
  sendTransfer(event){
    this.close(event);
    this.transferService.data.next({
      "categoryCode": "#fbbb1b",
      "dates": {
        "valueDate": new Date()
      },
      "transaction": {
        "amountCurrency": {
          "amount": this.amount,
          "currencyCode": "EUR"
        },
        "type": "Online Transfer",
        "creditDebitIndicator": "DBIT"
      },
      "merchant": {
        "name": this.toAccount,
        "accountNumber": "SI64397745065188826"
      }
    })
  }
  keyPressNumbers(event) {

    var charCode = (event.which) ? event.which : event.keyCode;

    if(charCode == 8 || charCode == 46)
    {
      return true;
    }
    // Only Numbers 0-9
    if ( (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  keyup(ref){
    console.log('ref.value = ', ref.value);
    if(ref.value > (5824.76+500)){
      this.validateAmount=true;
      this.popup = false;
      this.errorMessage = "There is not enough balance";
    }
    else
    {
      this.validateAmount=false;
      this.errorMessage = "This field is mandatory";
    }
  }
}
