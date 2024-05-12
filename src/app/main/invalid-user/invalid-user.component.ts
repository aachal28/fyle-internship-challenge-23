import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invalid-user',
  templateUrl: './invalid-user.component.html',
})
export class InvalidUserComponent {
  // Input properties
  @Input() appTheme: string = 'dark';
}