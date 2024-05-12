import {
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick,
  } from '@angular/core/testing';
  import { MainComponent } from './main.component';
  import { ApiService } from '../services/api.service';
  import { of } from 'rxjs';
  import { UserInputComponent } from './user-input/user-input.component';
  import { FormsModule } from '@angular/forms';
  
  // Mock GitHubApiService
  const githubServiceMock = {
    getUserInfo: () => of({ public_repos: 5 } as any),
    getUserRepos: () => of([{ name: 'Repo 1' }, { name: 'Repo 2' }] as any),
  };
  
  describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;
    let githubService: ApiService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [MainComponent, UserInputComponent],
        providers: [{ provide: ApiService, useValue: githubServiceMock }],
        imports: [FormsModule],
      });
  
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      githubService = TestBed.inject(ApiService);
  
      // Trigger ngOnInit
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should update user information on successful user search', fakeAsync(() => {
      spyOn(githubService, 'getUser').and.returnValue(
        of({ public_repos: 5 } as any)
      );
      component.searchUser({ username: 'test' });
      tick();
      expect(component.isValidUser).toBeTruthy();
      expect(component.totalRepoCount).toBe(5);
    }));
  
    it('should update repositories on successful repository search', fakeAsync(() => {
      spyOn(githubService, 'getRepos').and.returnValue(
        of([{ name: 'Repo 1' }, { name: 'Repo 2' }] as any)
      );
      component.searchUser({ username: 'test' });
      tick();
      expect(component.repos.length).toBe(2);
    }));
  });