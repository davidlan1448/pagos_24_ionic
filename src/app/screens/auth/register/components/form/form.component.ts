import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from "@angular/core";
import { Animation, AnimationController } from "@ionic/angular";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { RepeatField } from "src/app/utils/repeatField";
import { Subscription } from "rxjs";

@Component({
  selector: "FormRegister",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  @Output("onValidForm") validFormEmit = new EventEmitter<any>();
  public registerForm: FormGroup;

  public typePassword: string = "password";
  public typeCorfirnPassword: string = "password";
  public typePin: string = "password";
  public typeCorfirnPin: string = "password";

  private statusChangesForm: Subscription;

  constructor(public formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group(
      {
        email: [
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            ),
          ]),
        ],
        cEmail: ["", Validators.compose([Validators.required])],
        password: ["", Validators.compose([Validators.required])],
        cPassword: ["", Validators.compose([Validators.required])],
        pin: ["", Validators.compose([Validators.required, Validators.maxLength(6)])],
        cPin: ["", Validators.compose([Validators.required, Validators.maxLength(6)])],
      },
      {
        validator: [
          RepeatField("email", "cEmail"),
          RepeatField("password", "cPassword"),
          RepeatField("pin", "cPin"),
        ],
      }
    );
  }

  ngOnInit() {
    this.statusChangesForm = this.registerForm.statusChanges.subscribe(
      (res) => {
        if (res === "VALID") {
          this.validFormEmit.emit(this.registerForm.value);
        } else if (res === "INVALID") {
          this.validFormEmit.emit(null);
        }
      }
    );
  }

  ngOnDestroy() {
    this.statusChangesForm.unsubscribe();
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
    return this.registerForm.get(name);
  }
}
