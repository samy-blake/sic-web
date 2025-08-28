import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VUser } from './v-user';

describe('VUser', () => {
  let component: VUser;
  let fixture: ComponentFixture<VUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
