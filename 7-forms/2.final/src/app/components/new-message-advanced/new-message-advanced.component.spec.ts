import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMessageAdvancedComponent } from './new-message-advanced.component';

describe('NewMessageAdvancedComponent', () => {
  let component: NewMessageAdvancedComponent;
  let fixture: ComponentFixture<NewMessageAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMessageAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMessageAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
