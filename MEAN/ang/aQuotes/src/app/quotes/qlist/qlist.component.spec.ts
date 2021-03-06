import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlistComponent } from './qlist.component';

describe('QlistComponent', () => {
  let component: QlistComponent;
  let fixture: ComponentFixture<QlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
