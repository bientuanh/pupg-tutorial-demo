import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuPageComponent } from './menu-page/menu-page.component';
import { GunInfoComponent } from './pages/gun-info/gun-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuPageComponent },
  { path: 'gun-info', component: GunInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
