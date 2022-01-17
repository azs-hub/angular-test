import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Intention } from './intention'
import { INTENTIONS } from './mock-intent' 

@Injectable({
  providedIn: 'root'
})
export class IntentionService {

	intentions: Intention[] = INTENTIONS;

  constructor() { }

  getIntentions(): Observable<Intention[]> {
  	const intentions = of(INTENTIONS);
  	return intentions;
  }

  add(intent: Intention): void {
    if (intent !== undefined)
      this.intentions.push(intent);
  }
}