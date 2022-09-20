import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { NgtCanvasModule } from '@angular-three/core';
import { NgtColorAttributeModule } from '@angular-three/core/attributes';
import { NgtAmbientLightModule } from '@angular-three/core/lights';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtBoxGeometryModule,
  NgtPlaneGeometryModule,
} from '@angular-three/core/geometries';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtSobaFirstPersonControlsModule } from '@angular-three/soba/controls';
import { NgtSobaTextModule } from '@angular-three/soba/abstractions';
import { MasterpieceComponent } from './components/masterpiece/masterpiece.component';

@NgModule({
  declarations: [TimelineComponent, MasterpieceComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    NgtCanvasModule,
    NgtColorAttributeModule,
    NgtAmbientLightModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtPlaneGeometryModule,
    NgtMeshStandardMaterialModule,
    NgtSobaFirstPersonControlsModule,
    NgtSobaTextModule,
  ],
})
export class TimelineModule {}
