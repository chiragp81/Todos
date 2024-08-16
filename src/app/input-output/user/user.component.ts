import { Component } from '@angular/core';
import { UserDetailsComponent } from "../user-details/user-details.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserDetailsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  parentName: string = 'Ricky';
  parentDetails: { age: number } = { age: 30 };

  updateParentName() {
    this.parentName = 'Michel';
  }

  updateParentAge() {
    // Update the object property to see the difference in change detection
    this.parentDetails.age = 50;
    // Uncomment the following line to trigger change detection in OnPush child component
    // this.parentDetails = { ...this.parentDetails };
  }
}
