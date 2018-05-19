import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import * as shape from 'd3-shape';
import {MarketDataService} from '../../services/market-data.service';

@Component({
  selector: 'app-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  showXAxisLabel = false;
  tooltipDisabled = false;
  showYAxisLabel = true;
  showGridLines = true;
  animations = true;
  showDataLabel = false;
  autoScale = true;
  @Input() xAxisLabel;
  @Input() yAxisLabel;

  @Input() data;

  constructor() {}

  ngOnInit() {
  }
}
