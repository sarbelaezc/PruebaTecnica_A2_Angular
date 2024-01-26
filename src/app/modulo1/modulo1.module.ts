import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Modulo1Component } from './modulo1.component';

@NgModule({
  declarations: [Modulo1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Modulo1Component }]),
  ],
})
export class Modulo1Module {}
