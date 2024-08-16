import { Component } from '@angular/core';
import { LoggerSelfService } from '../services/logger-self.service';
import { DiChildComponent } from "./di-child/di-child.component";

@Component({
  selector: 'app-hierarchical-di',
  standalone: true,
  imports: [DiChildComponent],
  // parent Injector
  providers: [LoggerSelfService],
  templateUrl: './hierarchical-di.component.html',
  styleUrl: './hierarchical-di.component.scss'
})
export class HierarchicalDiComponent {

}
