import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TaskComponent} from "./components/task/task.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'task/create', component: TaskComponent },
      { path: 'task/edit/:id', component: TaskComponent },
      { path: 'task/:id', component: TaskComponent },
      { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
