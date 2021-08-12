import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrComponentsComponent } from './br-components.component';

describe('BrLibComponentsComponent', () => {
  let component: BrComponentsComponent;
  let fixture: ComponentFixture<BrComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
