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
import { TranslateService } from "@ngx-translate/core";

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { toast } from "src/app/utils/sweetalert";
import { Subscription } from "rxjs";

@Component({
  selector: "FormPersonalInformation",
  templateUrl: "./formPersonalInformation.component.html",
  styleUrls: ["./formPersonalInformation.component.scss"],
})
export class FormPersonalInformationComponent implements OnInit, OnDestroy {
  @Output("onValidForm") validFormEmit = new EventEmitter<any>();
  public personalForm: FormGroup;

  private statusChangesForm: Subscription;

  constructor(
    private formbuilder: FormBuilder,
    private translateService: TranslateService
  ) {
    this.personalForm = this.formbuilder.group({
      country: ["", Validators.compose([Validators.required])],
      state: ["", Validators.compose([Validators.required])],
      names: ["", Validators.compose([Validators.required])],
      surnames: ["", Validators.compose([Validators.required])],
      codeCi: ["v", Validators.compose([Validators.required])],
      ci: ["", Validators.compose([Validators.required])],
      postalCode: ["", Validators.compose([Validators.required])],
      address: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])],
      landline: ["", Validators.compose([Validators.required])],
      cellphone: ["", Validators.compose([Validators.required])],
      terms: [false, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.statusChangesForm = this.personalForm.statusChanges.subscribe(
      (res) => {
        
        if (res === "VALID") {
          this.validFormEmit.emit(this.personalForm.value);
        } else if (res === "INVALID") {
          this.validFormEmit.emit({});
        }
      }
    );
  }

  ngOnDestroy() {
    this.statusChangesForm.unsubscribe();
  }

  /**
   * @description muestra una ventana de informacion
   * @param event
   */
  handleInfoCellphone(event: boolean) {
    this.translateService.get("register").subscribe((txt) => {
      toast("", "info", "center", null, {
        showConfirmButton: true,
        text: txt.infoCellPhone,
      });
    });
  }

  /**
   * @description muestra una ventana de informacion
   * @param event
   */
  handleInfoLandline(event: boolean) {
    this.translateService.get("register").subscribe((txt) => {
      toast("", "info", "center", null, {
        showConfirmButton: true,
        text: txt.infoLandline,
      });
    });
  }

  /**
   * @description Obtiene el AbstractControl del formulario
   * @param name Nombre del AbstractControl
   * @return AbstractControl
   * @author David Ramirez
   */
  public getAbstractControl(name: string): AbstractControl {
    return this.personalForm.get(name);
  }
}
