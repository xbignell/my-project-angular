import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionTextComponent } from './introduction-text.component';

describe('IntroductionTextComponent', () => {
  let component: IntroductionTextComponent;
  let fixture: ComponentFixture<IntroductionTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
