import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

    import_unit = "";
    scale = [{id: 1, code: 'AdSP'}, {id: 2, code: 'ASP/ DSP'}, {id: 3, code: 'CI/ RI'}, {id: 4, code:'ASI/ HC'}, {id: 5, code:'PC/ HG'}, {id: 6, code:'WPC/ WHG'}, {id: 7, code:'ARPC'}, {id: 8, code:'CPMF'}];
    stats = {
        required: {1: 1, 2: 4, 3: 10, 4: 20, 5: 50, 6: 20, 7: 0, 8: 0},
        received: {1: 1, 2: 3, 3: 9, 4: 22, 5: 47, 6: 20, 7: 0, 8: 0}
      };
  
    constructor(private renderer: Renderer2, private el: ElementRef) { }
    startAnimationForLineChart(chart){
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;
  
        chart.on('draw', function(data) {
          if(data.type === 'line' || data.type === 'area') {
            data.element.animate({
              d: {
                begin: 600,
                dur: 700,
                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                to: data.path.clone().stringify(),
                easing: Chartist.Svg.Easing.easeOutQuint
              }
            });
          } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'ease'
                  }
                });
            }
        });
  
        seq = 0;
    };
    startAnimationForBarChart(chart){
        let seq2: any, delays2: any, durations2: any;
  
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function(data) {
          if(data.type === 'bar'){
              seq2++;
              data.element.animate({
                opacity: {
                  begin: seq2 * delays2,
                  dur: durations2,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
        });
  
        seq2 = 0;
    };
    ngOnInit() {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
  
        const dataDailySalesChart: any = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
  
       const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }
  
        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
  
        this.startAnimationForLineChart(dailySalesChart);
  
  
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
  
        const dataCompletedTasksChart: any = {
            labels: ['Z1', 'Z2', 'Z3', 'Z4', 'Z5'],
            series: [
                [90, 65, 75, 30, 28]
            ]
        };
  
       const optionsCompletedTasksChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }
  
        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
  
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
  
  
  
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
  
        var datawebsiteViewsChart = {
          labels: ['SP', 'AdSP', 'DSP', 'CI', 'SI', 'HC', 'PC', 'WPC', 'HG', 'CPMF'],
          series: [
            [50, 60, 100, 90, 90, 85, 80, 80, 90, 75]
  
          ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 100,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
  
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    }
  
    handleImport(unit: string) {
      this.import_unit = unit;
      const anchorElement = this.el.nativeElement.querySelector('#ancImport'); 
      if (anchorElement) {
        this.renderer.selectRootElement(anchorElement).click();
      }    
    }
  
}
  