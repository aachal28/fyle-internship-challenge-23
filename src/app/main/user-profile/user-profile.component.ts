import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  // Input properties
  @Input() searchedUser: User | undefined;
  @Input() appTheme: string  = 'dark';
}