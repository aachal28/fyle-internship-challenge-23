import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user information', () => {
    const dummyUsername = 'testuser';
    const dummyUserData = { login: dummyUsername, name: 'Test User' };

    service.getUser(dummyUsername).subscribe(userData => {
      expect(userData).toEqual(dummyUserData);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${dummyUsername}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserData);
  });

  it('should retrieve user repositories', () => {
    const dummyUsername = 'testuser';
    const dummyRepos = [{ name: 'repo1' }, { name: 'repo2' }];

    service.getRepos(dummyUsername).subscribe(repos => {
      expect(repos).toEqual(dummyRepos);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${dummyUsername}/repos`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);
  });
});
