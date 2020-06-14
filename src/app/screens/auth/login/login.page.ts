import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { AnimationController, Animation } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

import { AuthService } from "src/app/core/services/auth.service";
import { toast } from "src/app/utils/sweetalert";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public language: string = "";
  public loadingFormlogin: boolean = false;

  constructor(
    public formbuilder: FormBuilder,
    private animationCtrl: AnimationController,
    private translateService: TranslateService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  /**
   * @description realiza el login
   * @param param0
   */
  public submit({ email, password }: any) {
    this.loadingFormlogin = true;

    this.authService.login(email, password).subscribe(
      (res) => {
        this.loadingFormlogin = false;

        this.translateService
          .get("login")
          .subscribe((txt) => {
            toast(txt.messageSuccess, "success");
          });
      },
      (err) => {
        console.log(err);
        this.loadingFormlogin = false;
        this.translateService
          .get("login")
          .subscribe((txt) => {
            toast(txt.messageError, "error");
          });
      }
    );
  }

  public handleLanguage(event: string): void {
    this.language = event;

    // cambia el idioma de la aplicacion
    if (event) this.translateService.use(event);

    // animacion de cambio de idioma
    const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#animate"))
      .duration(700)
      .fromTo("height", event ? "0" : "379px", event ? "379px" : "120px");

    animation.play();
  }
}
