import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListOfContentsComponent } from './components/list-of-contents/list-of-contents.component';
import { ContentComponent } from './pages/content/content.component';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { EditSongComponent } from './pages/edit-song/edit-song.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListOfContentsComponent,
    ContentComponent,
    AddSongComponent,
    EditSongComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
