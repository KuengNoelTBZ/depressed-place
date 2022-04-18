import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RainDropComponent } from './components/rain-drop/rain-drop.component';

import { BlogComponent } from './pages/blog/blog.component';
import { RainDropsComponent } from './components/rain-drops/rain-drops.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RainDropComponent,
    BlogComponent,
    RainDropsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
