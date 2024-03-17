import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEntropotComponent } from './get-all-entropot.component';

describe('GetAllEntropotComponent', () => {
  let component: GetAllEntropotComponent;
  let fixture: ComponentFixture<GetAllEntropotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllEntropotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllEntropotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
