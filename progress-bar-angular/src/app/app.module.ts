import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BlockComponent} from './components/block.component';
import {ProgressBarComponent} from './components/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
