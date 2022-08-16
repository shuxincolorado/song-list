import { Injectable} from '@angular/core';

import { Observable } from 'rxjs';
import { asyncData, asyncError } from '../testing/async-observable-helper';

import { map } from 'rxjs/operators';
import { SONGS } from '../mock-songs';
import { Song } from '../Song';

// re-export for tester convenience
import { SongService } from '../services/song.service';

@Injectable()
/**
 * FakeSongService pretends to make real http requests.
 * implements only as much of SongService as is actually consumed by the app
 */
export class TestSongService extends SongService{

  constructor() {
    // This is a fake testing service that won't be making HTTP
    // requests so we can pass in `null` as the HTTP client.
    super(null!, null!);
  }

  songs = SONGS;
  lastResult!: Observable<any>; // result from last method call

  override addSong(song: Song): Observable<Song> {
    throw new Error('Method not implemented.');
  }

  override deleteSong(song: number | Song): Observable<Song> {
    throw new Error('Method not implemented.');
  }

  override getSongs(): Observable<Song[]> {
    return this.lastResult = asyncData(this.songs);
  }

  override updateSong(song: Song): Observable<Song> {
    throw new Error('Method not implemented.');
  }
}
