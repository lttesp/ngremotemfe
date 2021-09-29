import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';


const routes: Routes = [
  { path: 'land', component: LandingComponent, pathMatch: 'full' },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: false  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
