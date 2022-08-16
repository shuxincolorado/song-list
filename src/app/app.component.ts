import { Component, ViewChild, OnInit } from '@angular/core';
import {Sort, MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {SONGS} from './mock-songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  dataSource = new MatTableDataSource(SONGS)
  title: string = "Song Library";

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngOnInit(){
    this.dataSource.sort = this.sort;
  }
}
