import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public formRegister: any = {};
  public formRegisterPersonal: any = {};

  public showFormPersonal: boolean = false;

  public disabledSubmit = this.isValid(
    this.formRegister,
    this.formRegisterPersonal
  );

  constructor(
    private _navigate: NavController,
    private router: Router,
    private nativePageTransitions: NativePageTransitions
  ) {}

  ngOnInit() {}

  goBack() {
    const options: NativeTransitionOptions = {
      direction: "left",
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60,
    };

    this.nativePageTransitions.slide(options);

    this._navigate.navigateForward(["auth/login"], {
      animated: true,
      animationDirection: 'back',
    });
  }

  handleValidFormRegister(event): void {
    this.formRegister = event;
    this.disabledSubmit = this.isValid(
      this.formRegister,
      this.formRegisterPersonal
    );
  }

  handleValidFormPersonalRegister(event): void {
    this.formRegisterPersonal = event;
    this.disabledSubmit = this.isValid(
      this.formRegister,
      this.formRegisterPersonal
    );
  }

  /**
   * @description muestra o oculta el formulario de registro personal
   */
  public showFormPersonalRegister(): void {
    this.showFormPersonal = !this.showFormPersonal;
  }

  /**
   * @description si hay datos en los formularios se active el boton de registro
   * @param form1
   * @param form2
   */
  private isValid(form1: any, form2: any): boolean {
    return Object.keys(form1).length > 0 && Object.keys(form2).length > 0;
  }
}
