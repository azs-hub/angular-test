import { Component, OnInit } from '@angular/core';
import { Intention } from '../../services/intention/intention'
import { IntentionService } from '../../services/intention/intention.service'

@Component({
  selector: 'app-intent-list',
  templateUrl: './intent-list.component.html',
  styleUrls: ['./intent-list.component.scss']
})
export class IntentListComponent implements OnInit {

	intentions?: Intention[];
  constructor(private intentionService: IntentionService) { }

  ngOnInit(): void {
  	this.getIntentions();
  }

  getIntentions(): void {
	  this.intentions = this.intentionService.getIntentions();
	}

}
