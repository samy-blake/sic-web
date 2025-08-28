import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAuth } from './v-auth';

describe('VAuth', () => {
  let component: VAuth;
  let fixture: ComponentFixture<VAuth>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VAuth]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
