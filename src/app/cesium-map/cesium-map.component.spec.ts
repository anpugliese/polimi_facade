import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesiumMapComponent } from './cesium-map.component';

describe('CesiumMapComponent', () => {
  let component: CesiumMapComponent;
  let fixture: ComponentFixture<CesiumMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CesiumMapComponent]
    });
    fixture = TestBed.createComponent(CesiumMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
