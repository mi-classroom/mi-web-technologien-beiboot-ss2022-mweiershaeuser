import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { MasterpiecePreviewComponent } from './components/masterpiece-preview/masterpiece-preview.component';

@NgModule({
  declarations: [ListComponent, MasterpiecePreviewComponent],
  imports: [CommonModule, ListRoutingModule],
})
export class ListModule {}
