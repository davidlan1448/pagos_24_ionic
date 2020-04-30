import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';

import { LoginPage } from "./login/login.page";
import { RegisterPage } from "./register/register.page";
import { AuthPageRoutingModule } from "./auth-routing.module";
import { LanguageComponent } from "./login/components/language/language.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormComponent } from "./login/components/form/form.component";
import { FormRegisterComponent } from "./register/components/form/form.component";
import { FormPersonalInformationComponent } from "./register/components/formPersonalInformation/formPersonalInformation.component";

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    LanguageComponent,
    FormComponent,
    FormRegisterComponent,
    FormPersonalInformationComponent,
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class AuthModule {}
