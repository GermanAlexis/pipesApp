import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericPipePagesComponent } from './pages/numeric-pipe-page/numeric-pipe-page.component';
import { BasicsPipePagesComponent } from './pages/basicsPipe/basics-pipe-page.component';
import { UncommonPipesPagesComponent } from './pages/uncommon-pipes-pages/uncommon-pipes-pages.component';
import { StructurePipeRoutingModule } from './structure-pipe-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    NumericPipePagesComponent,
    BasicsPipePagesComponent,
    UncommonPipesPagesComponent,
  ],
  imports: [CommonModule, StructurePipeRoutingModule, PrimeNgModule],
})
export class StructurePipeModule {}
