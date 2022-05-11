import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContainerComponent, HeaderComponent, ContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [ContainerComponent],
})
export class CoreModule {}
