import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AticleItemComponent } from './aticle-item.component';

describe('AticleItemComponent', () => {
  let component: AticleItemComponent;
  let fixture: ComponentFixture<AticleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AticleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
