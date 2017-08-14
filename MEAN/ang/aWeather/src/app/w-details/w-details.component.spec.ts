import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WDetailsComponent } from './w-details.component';

describe('WDetailsComponent', () => {
  let component: WDetailsComponent;
  let fixture: ComponentFixture<WDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
