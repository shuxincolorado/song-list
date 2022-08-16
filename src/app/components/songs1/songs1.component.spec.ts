import { ComponentFixture, TestBed,fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { addMatchers } from '../../testing/jasmine-matchers';
import { Songs1Component } from './songs1.component';
import { SongService } from '../../services/song.service'
import { SongModule } from '../../modules/song.module';
import { DatePipe } from '@angular/common';
import { TestSongService } from '../../testing/test-song.service';
import { SONGS } from '../../mock-songs';


const allSongs = SONGS;

let comp: Songs1Component;
let fixture: ComponentFixture<Songs1Component>;
let page: Page;

//Testing ///
describe('Songs1Component', () => {
  //let component: Songs1Component;
  //let fixture: ComponentFixture<Songs1Component>;

  //let songService : SongService;
  let datePipe : DatePipe;

  beforeEach(async () => {
    addMatchers();

    TestBed
        .configureTestingModule({
          imports: [SongModule],
          providers: [
            {provide: SongService, useClass: TestSongService},
            {provide: DatePipe, useValue: datePipe}
          ]
        })
        .compileComponents()
        .then(createComponent);
  });

  it('should display songs', () => {
    console.log("inside Song1 unite test");
    console.log("page is " + page);
    expect(page.songs.length).toBeGreaterThan(0);
  });
  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});



/////////// Helpers /////

/** Create the component and set the `page` test variables */
function createComponent() {
  fixture = TestBed.createComponent(Songs1Component);
  comp = fixture.componentInstance;

  // change detection triggers ngOnInit which gets a hero
  fixture.detectChanges();

  return fixture.whenStable().then(() => {
    // got the heroes and updated component
    // change detection updates the view
    fixture.detectChanges();
    page = new Page();
  });
}

class Page {
  /** song line elements */
  songs: HTMLDivElement[];

  /** Highlighted DebugElement */
  //highlightDe: DebugElement;

  /** Spy on router navigate method */
  //navSpy: jasmine.Spy;

  constructor() {
    const songRowNodes = fixture.nativeElement.querySelectorAll('div');
    this.songs = Array.from(songRowNodes);

    // Find the first element with an attached HighlightDirective
    //this.highlightDe = fixture.debugElement.query(By.directive(HighlightDirective));

    // Get the component's injected router navigation spy
    //const routerSpy = fixture.debugElement.injector.get(Router);
    //this.navSpy = routerSpy.navigate as jasmine.Spy;
  }
}
