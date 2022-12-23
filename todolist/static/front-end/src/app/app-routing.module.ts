import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TaskComponent} from "./components/task/task.component";
import {PageNotFoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {TaskEditComponent} from "./components/task/task-edit.component";

const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'task/create', component: TaskEditComponent },
      { path: 'task/edit/:id', component: TaskEditComponent },
      { path: 'task/:id', component: TaskComponent },
      { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
