import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
Highcharts = Highcharts
chartOptions={}

constructor(){
  this.chartOptions={
    
    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
      categories: ['mean', 'python', 'flutter', '.dotnet', 'testing', 'datascience',
          'bigdata', 'javaspring', 'AI', 'ML']
  },
  yAxis: {
      title: {
          enabled: false
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'placements: {point.y}'
  },
  title: {
      text: 'Placements report analysis, 2023',
      align: 'center'
  },
  subtitle: {
      text: 'Luminar Technoloab' ,
      align: 'center'
  },
  legend: {
      enabled: false
  },
  credits:{enabled : false}
,  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
      colorByPoint: true
  }]
  }
  HC_exporting(Highcharts);
  }

}
  
