import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentCreateComponent } from './intent-create.component';

describe('IntentCreateComponent', () => {
  let component: IntentCreateComponent;
  let fixture: ComponentFixture<IntentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
