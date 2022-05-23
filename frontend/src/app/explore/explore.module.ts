import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { MasterpiecePreviewComponent } from './components/masterpiece-preview/masterpiece-preview.component';

@NgModule({
  declarations: [ExploreComponent, MasterpiecePreviewComponent],
  imports: [CommonModule, ExploreRoutingModule],
})
export class ExploreModule {}
