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
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'Price';
  showGridLines = true;
  animations = true;
  showDataLabel = false;
  autoScale = true;

  data = [
    {
      name: 'Bitcoin',
      series: [
        {
          name: '15 May',
          value: 7300000
        },
        {
          name: '16 May',
          value: 8940000
        },
        {
          name: '17 May',
          value: 7940000
        }
      ]
    },
    {
      name: 'Ethereum',
      series: [
        {
          name: '15 May',
          value: 7870000
        },
        {
          name: '16 May',
          value: 8270000
        },
        {
          name: '17 May',
          value: 8720000
        }
      ]
    },

    {
      name: 'Ripple',
      series: [
        {
          name: '15 May',
          value: 7800300
        },
        {
          name: '16 May',
          value: 8200040
        },
        {
          name: '17 May',
          value: 9200040
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
