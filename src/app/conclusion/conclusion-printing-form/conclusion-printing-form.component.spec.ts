import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionPrintingFormComponent } from './conclusion-printing-form.component';

describe('ConclusionPrintingFormComponent', () => {
  let component: ConclusionPrintingFormComponent;
  let fixture: ComponentFixture<ConclusionPrintingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionPrintingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionPrintingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
