import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './pages/add-song/add-song.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: 'content/:id', component: ContentComponent},
  { path: 'add-song', component: AddSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
