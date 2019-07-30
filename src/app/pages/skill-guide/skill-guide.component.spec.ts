import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGuideComponent } from './skill-guide.component';

describe('SkillGuideComponent', () => {
  let component: SkillGuideComponent;
  let fixture: ComponentFixture<SkillGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
