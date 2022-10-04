import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { ContentComponent } from './pages/content/content.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'content/:id', component: ContentComponent},
  { path: 'add-song', component: AddSongComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
