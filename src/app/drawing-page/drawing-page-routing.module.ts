import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawingPagePage } from './drawing-page.page';

const routes: Routes = [
  {
    path: '',
    component: DrawingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawingPagePageRoutingModule {}
