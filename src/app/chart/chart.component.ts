import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as shape from 'd3-shape';

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
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  animations = true;
  showDataLabel = false;
  autoScale = true;

  data = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300000
        },
        {
          name: '2011',
          value: 8940000
        },
        {
          name: '2012',
          value: 7940000
        }
      ]
    },
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870000
        },
        {
          name: '2011',
          value: 8270000
        },
        {
          name: '2012',
          value: 8720000
        }
      ]
    },

    {
      name: 'India',
      series: [
        {
          name: '2010',
          value: 7800300
        },
        {
          name: '2011',
          value: 8200040
        },
        {
          name: '2012',
          value: 9200040
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
