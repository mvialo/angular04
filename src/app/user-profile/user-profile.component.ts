import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name: string = "Doe";
  firstName: string = "John";
  age: number = 25;
  isAgeHidden: boolean = false;
  quote: string = "";
  photo: string = "https://randomuser.me/api/portraits/lego/2.jpg ";

  ageHidden(): void {
    this.isAgeHidden = !this.isAgeHidden;
  }


}
