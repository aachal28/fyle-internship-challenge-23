import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  appTitle: string = 'GitExplorer';
  appTheme: string = 'dark';

  // EventEmitter for notifying theme changes to parent components
  @Output() themeChanged = new EventEmitter<string>();

  ngOnInit(): void {
    this.themeChanged.emit(this.appTheme);
  }

  toggleTheme(): void {
    // Remove the current theme class from the body
    document.body.classList.remove(this.appTheme);

    // Toggle between 'dark' and 'light' themes
    this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';

    // Add the updated theme class to the body
    document.body.classList.add(this.appTheme);

    // Emit the updated theme to parent components
    this.themeChanged.emit(this.appTheme);
  }
}
