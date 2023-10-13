import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
// import { HomeRoutingModule } from './home.routing';
import { FreightComponent } from './freight/freight.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { TransportComponent } from './transport/transport.component';
const COMPONENTS = [HomeComponent, FreightComponent,TransportComponent];
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, SharedModule,HomeRoutingModule,LeafletModule],
})
export class HomeModule {}
