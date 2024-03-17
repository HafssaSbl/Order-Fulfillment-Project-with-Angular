import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEmballageComponent } from './post-emballage.component';

describe('PostEmballageComponent', () => {
  let component: PostEmballageComponent;
  let fixture: ComponentFixture<PostEmballageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostEmballageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
