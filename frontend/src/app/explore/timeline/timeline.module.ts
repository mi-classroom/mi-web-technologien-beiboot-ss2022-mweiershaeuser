import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { NgtCanvasModule } from '@angular-three/core';
import { NgtColorAttributeModule } from '@angular-three/core/attributes';
import { NgtAmbientLightModule } from '@angular-three/core/lights';
import { NgtLineModule } from '@angular-three/core/lines';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtBoxGeometryModule,
  NgtPlaneGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtLineBasicMaterialModule,
  NgtMeshBasicMaterialModule,
  NgtMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtCanvasTextureModule } from '@angular-three/core/textures';
import { MasterpieceComponent } from './components/masterpiece/masterpiece.component';

@NgModule({
  declarations: [TimelineComponent, MasterpieceComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    NgtCanvasModule,
    NgtAmbientLightModule,
    NgtLineModule,
    NgtLineBasicMaterialModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtPlaneGeometryModule,
    NgtMeshStandardMaterialModule,
    NgtMeshBasicMaterialModule,
    NgtSobaOrbitControlsModule,
    NgtCanvasTextureModule,
    NgtColorAttributeModule,
  ],
})
export class TimelineModule {}
