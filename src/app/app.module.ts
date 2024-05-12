import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

import { UserProfileComponent } from './main/user-profile/user-profile.component';
import { UserInputComponent } from './main/user-input/user-input.component';
import { InvalidUserComponent } from './main/invalid-user/invalid-user.component';
import { UserRepoListComponent } from './main/user-repo-list/user-repo-list.component';
import { UtilPaginationComponent } from './main/util-pagination/util-pagination.component';
import { UtilUserProfileLoaderComponent } from './main/util-profile-loader/util-profile-loader.component';
import { UtilUserRepoLoaderComponent } from './main/util-repo-loader/util-repo-loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    UserProfileComponent,
    UserRepoListComponent,
    UserInputComponent,
    InvalidUserComponent,
    UtilPaginationComponent,
    UtilUserProfileLoaderComponent,
    UtilUserRepoLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
