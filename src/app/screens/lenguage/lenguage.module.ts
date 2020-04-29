import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenguagePageRoutingModule } from './lenguage-routing.module';

import { LenguagePage } from './lenguage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LenguagePageRoutingModule
  ],
  declarations: [LenguagePage]
})
export class LenguagePageModule {}
