import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonItem, IonLabel, IonInput, IonText, IonList, IonGrid, IonRow, IonCol, IonButton, AlertController } from '@ionic/angular/standalone';
import { CartService } from 'src/app/core/services/data/cart.service';
import { FormValidatorService } from 'src/app/shared/services/form-validator.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [IonContent, IonInput, IonList, IonText, IonGrid, IonRow, IonCol, IonButton, RouterLink, CurrencyPipe, ReactiveFormsModule],
})
export default class FormComponent  implements OnInit {
  private _alertController = inject(AlertController);
  private _router = inject(Router);
  private _formValidatorService = inject(FormValidatorService);
  private _fb = inject(FormBuilder);
  cartService = inject(CartService);

  form: FormGroup = this._fb.group({
    zipCode: ['', [Validators.required, Validators.minLength(2)]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    bankAccountNumber: ['', Validators.required],
    accountHolderName: ['', Validators.required],
    ifscCode: ['', Validators.required]
  })
  constructor() { }

  ngOnInit() {}

  async handlePayment() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }

    const alert = await this._alertController.create({
      backdropDismiss: false,
      header: '',
      message: 'Payment done successfully.',
      buttons: [
        {
          text: 'Accept',
          role: 'accept'
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
    this.cartService.clear();
    this._router.navigate(['/home/stock']);
  }

  isValidField(field: string) {
    return this._formValidatorService.isValidField(this.form, field);
  }

  getFieldError(field: string) {
    return this._formValidatorService.getFieldError(this.form, field);
  }
}
