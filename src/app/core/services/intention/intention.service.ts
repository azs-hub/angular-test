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

  createIntention(intention: Intention): void {
  	console.log(intention);
  	// Http getXMLHttpRequest()
  	// 200 -> update localStorage
  }
}
