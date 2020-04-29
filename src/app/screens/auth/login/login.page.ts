import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { AnimationController, Animation } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public language: string = "";
  public LoginForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    private animationCtrl: AnimationController
  ) {
    this.LoginForm = this.formbuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ]),
      ],
      password: ["", Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {}

  public handleLanguage(event: string) {
    this.language = event;

    const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector("#animate"))
      .duration(500)
      .fromTo('height', event ? '0' : '379px', event ? '379px' : '120px');

    animation.play();
  }
}
