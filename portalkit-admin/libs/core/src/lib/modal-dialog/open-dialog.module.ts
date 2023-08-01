import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenDialogComponent} from "./open-dialog.component";



@NgModule({
  declarations: [OpenDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [OpenDialogComponent]
})
export class OpenDialogModule { }
