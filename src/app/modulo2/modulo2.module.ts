import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Modulo2Component } from './modulo2.component';

@NgModule({
  declarations: [Modulo2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Modulo2Component }]),
  ],
})
export class Modulo2Module {}
