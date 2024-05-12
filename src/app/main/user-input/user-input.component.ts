import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
})
export class UserInputComponent {
  // Input properties
  @Input() appTheme: string = 'dark';
  @Output() searchResult = new EventEmitter<any>();

  username: string = '';

  /**
   * Emits the search result to the parent component.
   */
  emitSearchResult(): void {
    // Check if the username is not empty before emitting the search result
    if (this.username.trim()) {
      this.searchResult.emit({
        username: this.username.trim(),
      });
    }
  }
}
