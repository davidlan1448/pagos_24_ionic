import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister = null;

  constructor(private _navigate: NavController) { }

  ngOnInit() {
  }

  goBack () {
    this._navigate.back();
  }

  handleValidFormRegister(event): void {
    this.formRegister = event;
  }

}
