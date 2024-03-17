import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEntropotComponent } from './update-entropot.component';

describe('UpdateEntropotComponent', () => {
  let component: UpdateEntropotComponent;
  let fixture: ComponentFixture<UpdateEntropotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEntropotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEntropotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
