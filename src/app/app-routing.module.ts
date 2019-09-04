import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndianBestSellersComponent } from './indian-best-sellers/indian-best-sellers.component';
import { InternationalBestSellersComponent } from './international-best-sellers/international-best-sellers.component';
import { GreatFirstListenersComponent } from './great-first-listeners/great-first-listeners.component';


const routes: Routes = [
  {
    path:'indianBestSellers',
    component:IndianBestSellersComponent
  },
  {
    path:'internationalBestSellers',
    component:InternationalBestSellersComponent
  },
  {
    path:'greatFirstListens',
    component:GreatFirstListenersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
