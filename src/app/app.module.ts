import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { XlistComponentComponent } from './x-list.component';
import { Routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { XCreateComponent } from './x-create.component';
import { FormsModule } from '@angular/forms';
import { XEditComponent } from './x-edit.component';
import { XDetailsComponent } from './x-details.component';
@NgModule({
  declarations: [
    AppComponent,
    XlistComponentComponent,
    XCreateComponent,
    XEditComponent,
    XDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
