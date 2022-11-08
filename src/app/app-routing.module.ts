import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { ContentComponent } from './pages/content/content.component';
import { EditSongComponent } from './pages/edit-song/edit-song.component';
import { IndexComponent } from './pages/index/index.component';
import { ListOfArtistsComponent } from './pages/list-of-artists/list-of-artists.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent},
  { path: 'content/:id', component: ContentComponent},
  { path: 'add-song', component: AddSongComponent},
  {path: 'content/:id/edit', component: EditSongComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'add-artist', component: ArtistsComponent },
  { path: 'list-of-artists', component: ListOfArtistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
