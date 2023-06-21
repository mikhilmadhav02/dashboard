import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  Highcharts = Highcharts
  chartOptions={}
  
  constructor(){
    this.chartOptions={

      
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'average student admission 2021-2022',
            align: 'left'
        },
        
        
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        credits:{enabled:false},
        series: [{
            type: 'pie',
            name: 'count',
            data: [
                ['mearn', 23],
                ['python', 18],
                ['asp.net',11],
                ['mel', 9],
                ['ai', 8],
                ['tetsing', 30]
            ]
        }]
    
    

    }
  }
}
