import { Injectable } from '@angular/core';

/*When you provide a service at the root level 
(e.g., using providedIn: 'root' in the @Injectable decorator), 
it becomes a singleton and is shared across the entire application.*/
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  info(message: string) {
    console.info(message);
  }
}
