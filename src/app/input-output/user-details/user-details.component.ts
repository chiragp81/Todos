import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() ChildParentName!: string;
  @Input() childObject!: { age: number };

  childName: string = 'Child Name';

  updateChildData() {
    this.childName = 'Updated Child name';
  }
}
