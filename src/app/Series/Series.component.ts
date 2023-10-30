import { Component, OnInit } from '@angular/core';
import { Series } from './series'; 
import { dataSeries } from './dataSeries'; 
import { SeriesService } from './series.service'; 

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }
  series!: Array<Series>;

  getCourses() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  ngOnInit() {
    this.getCourses();
  }
}