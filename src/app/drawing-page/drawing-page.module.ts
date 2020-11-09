import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrawingPagePageRoutingModule } from './drawing-page-routing.module';

import { DrawingPagePage } from './drawing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawingPagePageRoutingModule
  ],
  declarations: [DrawingPagePage]
})
export class DrawingPagePageModule {}
