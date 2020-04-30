import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Animation, AnimationController } from "@ionic/angular";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "FormRegister",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormRegisterComponent implements OnInit {
  @Output() selectLanguage = new EventEmitter<null>();
  public LoginForm: FormGroup;

  public typePassword: string = "password";
  public typeCorfirnPassword: string = "password";
  public typePin: string = "password";
  public typeCorfirnPin: string = "password";

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
      cEmail: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
      cPassword: ["", Validators.compose([Validators.required])],
      pin: ["", Validators.compose([Validators.required])],
      cPin: ["", Validators.compose([Validators.required])],
    });
  }

  async ngOnInit() {
    /* const animation: Animation = this.animationCtrl
      .create()
      .addElement(document.querySelector(".form"))
      .duration(700)
      .fromTo("height", "0px", "379px");

    animation.play().then(() => console.log("Finally")); */
  }

  /**
   * @description escucha el evento que cambia el tipo del input password
   * @param event
   */
  handleShowPassword(event: boolean) {
    this.typePassword = event ? "password" : "text";
  }

  handleShowCorfirnPassword(event: boolean) {
    this.typeCorfirnPassword = event ? "password" : "text";
  }

  handleShowPin(event: boolean) {
    this.typePin = event ? "password" : "text";
  }

  handleShowCorfirnPin(event: boolean) {
    this.typeCorfirnPin = event ? "password" : "text";
  }

  /**
   * @description Obtiene el AbstractControl del formulario
   * @param name Nombre del AbstractControl
   * @return AbstractControl
   * @author David Ramirez
   */
  public getAbstractControl(name: string): AbstractControl {
    return this.LoginForm.get(name);
  }
}
