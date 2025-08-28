import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistListItemTracks } from './playlist-list-item-tracks';

describe('PlaylistListItemTracks', () => {
  let component: PlaylistListItemTracks;
  let fixture: ComponentFixture<PlaylistListItemTracks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistListItemTracks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistListItemTracks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
