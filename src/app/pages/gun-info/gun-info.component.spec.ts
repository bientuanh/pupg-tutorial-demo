import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunInfoComponent } from './gun-info.component';

describe('GunInfoComponent', () => {
  let component: GunInfoComponent;
  let fixture: ComponentFixture<GunInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
