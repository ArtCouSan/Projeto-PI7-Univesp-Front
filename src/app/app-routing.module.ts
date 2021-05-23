import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEstadosComponent } from './modules/listar-estados/listar-estados.component';
import { ListarMiniOnibusComponent } from './modules/listar-mini-onibus/listar-mini-onibus.component';
import { ListarOnibusComponent } from './modules/listar-onibus/listar-onibus.component';
import { ListarTiposTransporteComponent } from './modules/listar-tipos-transporte/listar-tipos-transporte.component';
import { ListarTremMetroComponent } from './modules/listar-trem-metro/listar-trem-metro.component';
import { PegarOnibusComponent } from './modules/pegar-onibus/pegar-onibus.component';


const routes: Routes = [
  { path: 'listar/estados', component: ListarEstadosComponent },
  { path: 'listar/estados/:estado/transportes', component: ListarTiposTransporteComponent },
  { path: 'listar/estados/:estado/transportes/onibus', component:  ListarOnibusComponent},
  { path: 'listar/estados/:estado/transportes/mini-oni', component:  ListarMiniOnibusComponent},
  { path: 'listar/estados/:estado/transportes/trem-metro', component:  ListarTremMetroComponent},
  { path: 'listar/estados/:estado/transportes/onibus/:onibus', component: PegarOnibusComponent },
  { path: '',   redirectTo: '/listar/estados', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
