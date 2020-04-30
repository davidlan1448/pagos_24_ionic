import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TranslateModule } from '@ngx-translate/core';

import { InputComponent } from "./components/input/input.component";
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [InputComponent, LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
  ],

  exports: [InputComponent, LoadingComponent],
})
export class SharedModule {}
