import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Series> = [];
  constructor() { }
  getSeriesList() : Array<Series>
  {
    return dataSeries;
  }

  ngOnInit() {
    this.series = this.getSeriesList();
  }

}
