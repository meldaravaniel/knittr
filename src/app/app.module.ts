import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WordFormComponent } from './components/word-form/word-form.component';
import { WordEncodingComponent } from './components/word-encoding/word-encoding.component';
import { StitchComponent } from './components/stitch/stitch.component';
import { PatternComponent } from './components/pattern/pattern.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    WordFormComponent,
    WordEncodingComponent,
    StitchComponent,
    PatternComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
