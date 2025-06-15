import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistListItem } from './playlist-list-item';

describe('PlaylistListItem', () => {
  let component: PlaylistListItem;
  let fixture: ComponentFixture<PlaylistListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
