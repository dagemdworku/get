import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmuniumComponent } from './almunium.component';

describe('AlmuniumComponent', () => {
  let component: AlmuniumComponent;
  let fixture: ComponentFixture<AlmuniumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmuniumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmuniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
