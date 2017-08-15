import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RQuotesComponent } from './r-quotes.component';

describe('RQuotesComponent', () => {
  let component: RQuotesComponent;
  let fixture: ComponentFixture<RQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
