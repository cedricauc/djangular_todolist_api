import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';
import { TaskEditComponent } from './components/task/task-edit.component';
import { TaskListComponent } from './components/task/task-list.component';
import { TaskSearchComponent } from './components/task/task-search.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HomeComponent,
    TaskEditComponent,
    TaskListComponent,
    TaskSearchComponent,
    NavmenuComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
      { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
    //return 'http://localhost:8000/'
    return document.getElementsByTagName('base')[0].href;
}

