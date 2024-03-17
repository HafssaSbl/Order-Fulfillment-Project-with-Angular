import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStockageComponent } from './post-stockage.component';

describe('PostStockageComponent', () => {
  let component: PostStockageComponent;
  let fixture: ComponentFixture<PostStockageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostStockageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostStockageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
