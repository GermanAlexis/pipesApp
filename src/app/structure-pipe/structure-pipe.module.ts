import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericPipePagesComponent } from './pages/numeric-pipe-pages/numeric-pipe-pages.component';
import { BasicsPipePagesComponent } from './pages/basicsPipe/basicsPipe-pages.component';
import { UncommonPipesPagesComponent } from './pages/uncommon-pipes-pages/uncommon-pipes-pages.component';
import { StructurePipeRoutingModule } from './structure-pipe-routing.module';

@NgModule({
  declarations: [
    NumericPipePagesComponent,
    BasicsPipePagesComponent,
    UncommonPipesPagesComponent,
  ],
  imports: [CommonModule, StructurePipeRoutingModule],
})
export class StructurePipeModule {}
