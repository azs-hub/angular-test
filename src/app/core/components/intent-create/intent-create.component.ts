import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Component, OnInit } from '@angular/core';
import { Intention } from '../../services/intention/intention'
import { IntentionService } from '../../services/intention/intention.service'

@Component({
  selector: 'app-intent-create',
  templateUrl: './intent-create.component.html',
  styleUrls: ['./intent-create.component.scss']
})
export class IntentCreateComponent implements OnInit {

	addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  formulations: string[] = [];
  botAnswer: string = "";

  constructor(private intentionService: IntentionService) { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.formulations.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(intent: string): void {
    const index = this.formulations.indexOf(intent);

    if (index >= 0) {
      this.formulations.splice(index, 1);
    }
  }

  createIntent(): void {
  	let intention: Intention = {
  		formulations: this.formulations,
  		answer: this.botAnswer,
  	};
  	this.intentionService.add(intention);
  }


}
