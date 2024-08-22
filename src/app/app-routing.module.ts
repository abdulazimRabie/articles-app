import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

const routes: Routes = [
  {path: "", component: MainLayoutComponent, children: [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
