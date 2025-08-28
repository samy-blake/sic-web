import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V404 } from './v-404';

describe('V404', () => {
  let component: V404;
  let fixture: ComponentFixture<V404>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [V404]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V404);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
