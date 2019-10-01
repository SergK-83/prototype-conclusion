import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionWorkComponent } from './conclusion-work.component';

describe('ConclusionWorkComponent', () => {
  let component: ConclusionWorkComponent;
  let fixture: ComponentFixture<ConclusionWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
