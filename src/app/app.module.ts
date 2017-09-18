import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ModalComponent}  from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { SearchContentComponent } from './search-content/search-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    SearchComponent,
    SearchContentComponent 
  
  ],
  imports: [
    BrowserModule,HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }