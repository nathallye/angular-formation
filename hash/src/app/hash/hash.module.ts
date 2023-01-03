import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashComponent } from './hash.component';
import { HashService } from './shared';

@NgModule({
  declarations: [
    HashComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HashComponent
  ],
  providers: [
    HashService
  ]
})
export class HashModule { }
