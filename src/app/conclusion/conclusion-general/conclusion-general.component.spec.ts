import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionGeneralComponent } from './conclusion-general.component';

describe('ConclusionGeneralComponent', () => {
  let component: ConclusionGeneralComponent;
  let fixture: ComponentFixture<ConclusionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
