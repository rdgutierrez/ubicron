import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'quienessomos', loadChildren: './quienessomos/quienessomos.module#QuienessomosPageModule' },
  { path: 'soyvictima', loadChildren: './soyvictima/soyvictima.module#SoyvictimaPageModule' },
  { path: 'quehacer', loadChildren: './quehacer/quehacer.module#QuehacerPageModule' },
  { path: 'recursos', loadChildren: './recursos/recursos.module#RecursosPageModule' },
  { path: 'testimonios', loadChildren: './testimonios/testimonios.module#TestimoniosPageModule' },
  { path: 'recomendaciones', loadChildren: './recomendaciones/recomendaciones.module#RecomendacionesPageModule' },
  { path: 'articulos', loadChildren: './articulos/articulos.module#ArticulosPageModule' },
  { path: 'menurobot', loadChildren: './menurobot/menurobot.module#MenurobotPageModule' },
  { path: 'registroinicio', loadChildren: './registroinicio/registroinicio.module#RegistroinicioPageModule' },
  { path: 'registrousuario', loadChildren: './registrousuario/registrousuario.module#RegistrousuarioPageModule' },
  { path: 'registrocontacto', loadChildren: './registrocontacto/registrocontacto.module#RegistrocontactoPageModule' },
  { path: 'addcontactos', loadChildren: './addcontactos/addcontactos.module#AddcontactosPageModule' },
  { path: 'infollamada', loadChildren: './infollamada/infollamada.module#InfollamadaPageModule' },
  { path: 'detallepost/:img', loadChildren: './detallepost/detallepost.module#DetallepostPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
