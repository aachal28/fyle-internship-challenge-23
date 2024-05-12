import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.github.com/users';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string): Observable<any> {
    const userUrl = `${this.apiUrl}/${githubUsername}`;
    return this.httpClient.get<any[]>(userUrl);
  }

  getRepos(
    username: string,
    page: number,
    perPage: number
  ): Observable<any[]> {
    const userUrl = `${this.apiUrl}/${username}/repos?page=${page}&per_page=${perPage}`;
    return this.httpClient.get<any[]>(userUrl);
  }
}
