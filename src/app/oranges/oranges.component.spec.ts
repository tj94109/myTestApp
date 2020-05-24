import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangesComponent } from './oranges.component';

describe('OrangesComponent', () => {
  let component: OrangesComponent;
  let fixture: ComponentFixture<OrangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
