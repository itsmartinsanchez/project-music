import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListOfContentsComponent } from './components/list-of-contents/list-of-contents.component';
import { ContentComponent } from './pages/content/content.component';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { EditSongComponent } from './pages/edit-song/edit-song.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IndexComponent } from './pages/index/index.component';
import { SongsFormComponent } from './components/songs-form/songs-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListOfContentsComponent,
    ContentComponent,
    AddSongComponent,
    EditSongComponent,
    NavBarComponent,
    IndexComponent,
    SongsFormComponent,
    CommentsComponent,
    UserCommentsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
