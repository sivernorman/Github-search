import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { SearchUserComponent } from './search-user/search-user.component';

const routes: Routes = [
  {path:'repos',component:ReposComponent},
  {path:'user',component:SearchUserComponent},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
