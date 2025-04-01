import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTraningComponent } from './new-traning.component';

describe('NewTraningComponent', () => {
  let component: NewTraningComponent;
  let fixture: ComponentFixture<NewTraningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTraningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
