import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrLibComponentsComponent } from './br-lib-components.component';

describe('BrLibComponentsComponent', () => {
  let component: BrLibComponentsComponent;
  let fixture: ComponentFixture<BrLibComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrLibComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrLibComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
