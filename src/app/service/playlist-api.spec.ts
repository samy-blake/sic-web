import { TestBed } from '@angular/core/testing';

import { PlaylistApi } from './playlist-api';

describe('PlaylistApi', () => {
  let service: PlaylistApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaylistApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
