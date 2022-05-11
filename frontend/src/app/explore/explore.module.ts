import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { FormsModule } from '@angular/forms';
import { MasterpiecePreviewComponent } from './components/masterpiece-preview/masterpiece-preview.component';

@NgModule({
  declarations: [ExploreComponent, MasterpiecePreviewComponent],
  imports: [CommonModule, ExploreRoutingModule, FormsModule],
})
export class ExploreModule {}
