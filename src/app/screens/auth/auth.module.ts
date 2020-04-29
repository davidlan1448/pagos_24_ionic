import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { LoginPage } from "./login/login.page";
import { RegisterPage } from "./register/register.page";
import { AuthPageRoutingModule } from "./auth-routing.module";
import { LanguageComponent } from "./login/components/language/language.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormComponent } from "./login/components/form/form.component";

@NgModule({
  declarations: [LoginPage, RegisterPage, LanguageComponent, FormComponent],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
