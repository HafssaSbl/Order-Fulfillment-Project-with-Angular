import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommandeComponent } from './post-commande.component';

describe('PostCommandeComponent', () => {
  let component: PostCommandeComponent;
  let fixture: ComponentFixture<PostCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
