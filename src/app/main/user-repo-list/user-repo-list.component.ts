import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-repo-list',
  templateUrl: './user-repo-list.component.html'
})
export class UserRepoListComponent {
  @Input() repos: any[] = [];
  @Input() appTheme: string = 'dark'; // Provide a default theme if not provided
  constructor(private datePipe: DatePipe) {}

  formatCreatedAtDate(date: string | null): string {
    if (date) {
      return this.datePipe.transform(date, 'mediumDate') || '';
    }
    return ''; // or any other default value you prefer
  }
  
}
