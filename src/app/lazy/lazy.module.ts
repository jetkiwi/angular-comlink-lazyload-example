import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { MarkdownComponent } from './markdown/markdown.component';

@NgModule({
  declarations: [MarkdownComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
