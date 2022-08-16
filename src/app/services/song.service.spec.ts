import { TestBed,ComponentFixture, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { Song } from '../Song';
import { SONGS } from '../mock-songs';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { asyncData, asyncError } from '../testing/async-observable-helper';
import { SongService } from './song.service';

describe('SongService with spies', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let messageServiceSpy: MessageService;
  let songService: SongService;
  //let fixture: ComponentFixture<SongService>;

  
  beforeEach(async() => {
    /*
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
        providers: [SongService
          ]}).compileComponents();
    */
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    messageServiceSpy = new MessageService();
    songService = new SongService(httpClientSpy, messageServiceSpy);
  });

  it('should be created', () => {
    expect(songService).toBeTruthy();
  });

  it('should return expected songs (HttpClient called once)', (done: DoneFn) => {
    //data from mock file
    const expectedSongs: Song[] = SONGS;

    httpClientSpy.get.and.returnValue(asyncData(expectedSongs));

    songService.getSongs().subscribe({
      next: songs => {
        expect(songs)
          .withContext('expected songs')
          .toEqual(expectedSongs);
        done();

        console.log(songs);
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });
  

});
