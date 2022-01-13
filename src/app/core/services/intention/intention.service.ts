import { Injectable } from '@angular/core';
import { Intention } from './intention'
import { INTENTIONS } from './mock-intent' 

@Injectable({
  providedIn: 'root'
})
export class IntentionService {

	intentions: Intention[] = INTENTIONS;

  constructor() { }

  getIntentions(): Intention[] {
  	return INTENTIONS;
  }
}
