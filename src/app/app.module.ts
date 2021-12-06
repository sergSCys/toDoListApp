import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AutofocusFixModule } from 'ngx-autofocus-fix';


import { AppComponent } from './app.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutofocusFixModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
