import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPlaylist } from './v-playlist';

describe('VPlaylist', () => {
  let component: VPlaylist;
  let fixture: ComponentFixture<VPlaylist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VPlaylist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPlaylist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
