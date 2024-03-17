import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEntropotComponent } from './post-entropot.component';

describe('PostEntropotComponent', () => {
  let component: PostEntropotComponent;
  let fixture: ComponentFixture<PostEntropotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostEntropotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostEntropotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
