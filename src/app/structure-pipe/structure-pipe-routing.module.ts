import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPipePagesComponent } from './pages/basicsPipe/basicsPipe-pages.component';
import { NumericPipePagesComponent } from './pages/numeric-pipe-pages/numeric-pipe-pages.component';
import { UncommonPipesPagesComponent } from './pages/uncommon-pipes-pages/uncommon-pipes-pages.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsPipePagesComponent,
  },
  {
    path: 'numeric-pipe',
    component: NumericPipePagesComponent,
  },
  {
    path: 'uncommon-pipe',
    component: UncommonPipesPagesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructurePipeRoutingModule {}
