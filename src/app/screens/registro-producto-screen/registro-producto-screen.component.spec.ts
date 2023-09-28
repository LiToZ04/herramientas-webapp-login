import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductoScreenComponent } from './registro-producto-screen.component';

describe('RegistroProductoScreenComponent', () => {
  let component: RegistroProductoScreenComponent;
  let fixture: ComponentFixture<RegistroProductoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroProductoScreenComponent]
    });
    fixture = TestBed.createComponent(RegistroProductoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
