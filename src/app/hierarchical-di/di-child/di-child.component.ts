import { Component } from '@angular/core';
import { LoggerSelfService } from '../../services/logger-self.service';

@Component({
  selector: 'app-di-child',
  standalone: true,
  templateUrl: './di-child.component.html',
  styleUrl: './di-child.component.scss'
})
export class DiChildComponent {

  constructor(private logger: LoggerSelfService) {
    this.logger.log('Log from DI Child Component');
  }
}
