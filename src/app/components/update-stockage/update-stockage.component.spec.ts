import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockageComponent } from './update-stockage.component';

describe('UpdateStockageComponent', () => {
  let component: UpdateStockageComponent;
  let fixture: ComponentFixture<UpdateStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateStockageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
