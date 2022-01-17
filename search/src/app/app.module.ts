import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { NavbarComponent } from './navbar/navbar.component';
 import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SearchUserComponent } from './search-user/search-user.component';
      

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      ReposComponent,
      UserDetailComponent,
      SearchUserComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
 AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }