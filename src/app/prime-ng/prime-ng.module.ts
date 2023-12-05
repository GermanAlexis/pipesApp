import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    PanelModule,
    ButtonModule,
    FieldsetModule,
  ],
})
export class PrimeNgModule {}
