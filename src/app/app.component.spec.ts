import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { UserProfileComponent } from './main/user-profile/user-profile.component';
import { UserInputComponent } from './main/user-input/user-input.component';
import { InvalidUserComponent } from './main/invalid-user/invalid-user.component';
import { UserRepoListComponent } from './main/user-repo-list/user-repo-list.component';
import { UtilPaginationComponent } from './main/util-pagination/util-pagination.component';
import { UtilUserProfileLoaderComponent } from './main/util-profile-loader/util-profile-loader.component';
import { UtilUserRepoLoaderComponent } from './main/util-repo-loader/util-repo-loader.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HeroComponent,
        UserProfileComponent,
        UserRepoListComponent,
        UserInputComponent,
        InvalidUserComponent,
        UtilPaginationComponent,
        UtilUserProfileLoaderComponent,
        UtilUserRepoLoaderComponent
      ],
      imports: [FormsModule, NgxSkeletonLoaderModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});
