import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllEmballageComponent } from './get-all-emballage.component';

describe('GetAllEmballageComponent', () => {
  let component: GetAllEmballageComponent;
  let fixture: ComponentFixture<GetAllEmballageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllEmballageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
