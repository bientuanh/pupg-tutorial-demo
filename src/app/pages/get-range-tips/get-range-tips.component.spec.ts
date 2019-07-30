import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRangeTipsComponent } from './get-range-tips.component';

describe('GetRangeTipsComponent', () => {
  let component: GetRangeTipsComponent;
  let fixture: ComponentFixture<GetRangeTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRangeTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRangeTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
