import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { ListarEstadosComponent } from './modules/listar-estados/listar-estados.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListarTiposTransporteComponent } from './modules/listar-tipos-transporte/listar-tipos-transporte.component';
import { ListarOnibusComponent } from './modules/listar-onibus/listar-onibus.component';
import { PegarOnibusComponent } from './modules/pegar-onibus/pegar-onibus.component';
import { ListarMiniOnibusComponent } from './modules/listar-mini-onibus/listar-mini-onibus.component';
import { ListarTremMetroComponent } from './modules/listar-trem-metro/listar-trem-metro.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ListarEstadosComponent,
    ListarTiposTransporteComponent,
    ListarOnibusComponent,
    PegarOnibusComponent,
    ListarMiniOnibusComponent,
    ListarTremMetroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
