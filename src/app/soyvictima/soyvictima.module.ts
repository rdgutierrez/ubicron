import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SoyvictimaPage } from './soyvictima.page';

const routes: Routes = [
  {
    path: '',
    component: SoyvictimaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SoyvictimaPage]
})
export class SoyvictimaPageModule {}
