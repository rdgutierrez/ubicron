import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistrocontactoPage } from './registrocontacto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrocontactoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistrocontactoPage]
})
export class RegistrocontactoPageModule {}
