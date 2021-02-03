import { BuscadorComponent } from './buscador/buscador.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'buscar', component: BuscadorComponent},
  {path: 'listar', component: ListadoComponent},
  {path: 'detalle/:item', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
