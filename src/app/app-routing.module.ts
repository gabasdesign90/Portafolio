import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [

  {path:'portfolio',component:PortafolioComponent},
  {path:'categorias',component:CategoriaComponent},
  {path:'item',component:ItemComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'**',pathMatch:'full', redirectTo:'portfolio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
