import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisreviweComponent } from './detalisreviwe.component';

describe('DetalisreviweComponent', () => {
  let component: DetalisreviweComponent;
  let fixture: ComponentFixture<DetalisreviweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalisreviweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalisreviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
