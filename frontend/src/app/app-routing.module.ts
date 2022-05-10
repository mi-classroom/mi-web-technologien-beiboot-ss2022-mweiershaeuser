import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'explore',
    pathMatch: 'full',
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./explore/explore.module').then((m) => m.ExploreModule),
  },
  {
    path: '**',
    redirectTo: 'explore',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
