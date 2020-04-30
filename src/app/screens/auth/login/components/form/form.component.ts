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
  selector: "Form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input() loadingForm = false;

  @Output() selectLanguage = new EventEmitter<null>();
  @Output("onSubmit") loginEmit = new EventEmitter<null>();
  public LoginForm: FormGroup;
  public typePassword: string = "password";

  constructor(public formbuilder: FormBuilder) {
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

  async ngOnInit() {}

  public onSubmit(): void {
    this.loginEmit.emit(this.LoginForm.value);
  }

  /**
   * @description escucha el evento que cambia el tipo del input password
   * @param event
   */
  handleShowPassword(event: boolean): void {
    this.typePassword = event ? "password" : "text";
  }

  /**
   * @description emite un evento para volver a la seleccion de idioma
   */
  setLanguage(): void {
    this.selectLanguage.emit(null);
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
