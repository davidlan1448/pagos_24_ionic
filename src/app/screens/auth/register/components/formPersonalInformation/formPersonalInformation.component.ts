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
  selector: "FormPersonalInformation",
  templateUrl: "./formPersonalInformation.component.html",
  styleUrls: ["./formPersonalInformation.component.scss"],
})
export class FormPersonalInformationComponent implements OnInit {
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
      names: ["", Validators.compose([Validators.required])],
      surnames: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
      postalCode: ["", Validators.compose([Validators.required])],
      address: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])],
      landline: ["", Validators.compose([Validators.required])],
      cellphone: ["", Validators.compose([Validators.required])],
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
