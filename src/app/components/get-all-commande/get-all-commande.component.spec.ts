import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCommandeComponent } from './get-all-commande.component';

describe('GetAllCommandeComponent', () => {
  let component: GetAllCommandeComponent;
  let fixture: ComponentFixture<GetAllCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAllCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
