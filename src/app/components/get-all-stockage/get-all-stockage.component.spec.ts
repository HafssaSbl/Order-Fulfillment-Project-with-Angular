import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllStockageComponent } from './get-all-stockage.component';

describe('GetAllStockageComponent', () => {
  let component: GetAllStockageComponent;
  let fixture: ComponentFixture<GetAllStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllStockageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
