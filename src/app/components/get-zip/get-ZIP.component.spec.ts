import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetZIPComponent } from './get-ZIP.component';

describe('GetZIPComponent', () => {
  let component: GetZIPComponent;
  let fixture: ComponentFixture<GetZIPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetZIPComponent]
    });
    fixture = TestBed.createComponent(GetZIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
