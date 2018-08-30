import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionNewComponent } from './instruction-new.component';

describe('InstructionNewComponent', () => {
  let component: InstructionNewComponent;
  let fixture: ComponentFixture<InstructionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
