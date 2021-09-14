//[Dashboard Javascript]

//Project:	WebkitX Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	var options1 = {
          series: [{
          data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
          chart: {
          type: 'line',
          width: 60,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
		stroke: {
			width: 3,  
			curve: 'smooth',
		},
		colors: ['#0ab04d'],
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function (seriesName) {
                return ''
              }
            }
          },
          marker: {
            show: false
          }
        }
        };

        var chart1 = new ApexCharts(document.querySelector("#chart-1"), options1);
        chart1.render();
	
		
	
	
	var options = {
        series: [{
            name: "Current year",
            data: [8, 10, 45, 35, 75, 60, 100, 30, 55, 90, 120, 50]
        }],
        chart: {
		  foreColor:"#bac0c7",
          height: 310,
          type: 'area',
          zoom: {
            enabled: false
          }
        },
		colors:['#7367F0'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          	show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 4,
			dashArray: 0, 
        },
		 legend: {
		  show: true,
		  position: 'top',
		  horizontalAlign: 'center',
		 },
		fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        grid: {
			borderColor: '#f7f7f7', 
          row: {
            colors: ['transparent'], // takes an array which will be repeated on columns
            opacity: 0
          },			
		  yaxis: {
			lines: {
			  show: true,
			},
		  },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		  labels: {
			show: true,        
          },
          axisBorder: {
            show: true
          },
          axisTicks: {
            show: true
          },
          tooltip: {
            enabled: true,        
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: function (val) {
              return val + "K";
            }
          }
        
        },
      };
      var chart = new ApexCharts(document.querySelector("#charts_widget_2_chart"), options);
      chart.render();
	
	
	
	  var bar = new ProgressBar.Circle(progressbar1, {
		  color: '#ffbd34',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#ffbd34', width: 10 },
		  to: { color: '#ffbd34', width: 10 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<span class='fw-600 fs-18'>$45</span>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.4);
	
	
	
	
	  var bar = new ProgressBar.Circle(progressbar2, {
		  color: '#ff255f',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#ff255f', width: 10 },
		  to: { color: '#ff255f', width: 10 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<span class='fw-600 fs-18'>$20</span>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.2);
	
	
	
	
	  var bar = new ProgressBar.Circle(progressbar3, {
		  color: '#36bdff',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#36bdff', width: 10 },
		  to: { color: '#36bdff', width: 10 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<span class='fw-600 fs-18'>$85</span>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.7);
	
	
	
	
	  var bar = new ProgressBar.Circle(progressbar4, {
		  color: '#ff339e',
		  // This has to be the same size as the maximum width to
		  // prevent clipping
		  strokeWidth: 30,
		  trailWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  text: {
			autoStyleContainer: false
		  },
		  from: { color: '#ff339e', width: 10 },
		  to: { color: '#ff339e', width: 10 },
		  // Set default step function for all animate calls
		  step: function(state, circle) {
			circle.path.setAttribute('stroke', state.color);
			circle.path.setAttribute('stroke-width', state.width);

			var value = Math.round(circle.value() * 150);
			if (value === 0) {
			  circle.setText('');
			} else {
			  circle.setText("<span class='fw-600 fs-18'>$95</span>");
			}

		  }
		});
		bar.text.style.fontSize = '1.5rem';

		bar.animate(0.9);
	
	
	
	
	
	
	
	var options = {
          series: [{
          name: 'Earning',
          data: [76, 85, 101, 98, 87, 105, 91]
        }],
          chart: {
          type: 'bar',
		  foreColor:"#bac0c7",
          height: 249,
			  toolbar: {
        		show: false,
			  }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '20%',
          },
        },
        dataLabels: {
          enabled: false,
        },
		grid: {
			show: false,			
		},
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
		colors: ['#7367F0'],
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
			
        },
        yaxis: {
          
        },
		 legend: {
      		show: false,
		 },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          },
			marker: {
			  show: false,
		  },
        }
        };

        var chart = new ApexCharts(document.querySelector("#recent_trend"), options);
		chart.render();
	
      
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			responsiveClass: true,
			autoplay: true,
			responsive: {
			  0: {
				items: 1,
				nav: false
			  },
			  1000: {
				items: 2,
				nav: false
			  },
			  1300: {
				items: 3,
				nav: false,
				margin: 20
			  },
			  1600: {
				items: 4,
				nav: false,
				margin: 20
			  }
			}
		  });

         $(".knob").knob({
      /*change : function (value) {
       //console.log("change : " + value);
       },
       release : function (value) {
       console.log("release : " + value);
       },
       cancel : function () {
       console.log("cancel : " + this.value);
       },*/
      draw: function () {

        // "tron" case
        if (this.$.data('skin') == 'tron') {

          var a = this.angle(this.cv)  // Angle
              , sa = this.startAngle   // Previous start angle
              , sat = this.startAngle  // Start angle
              , ea                     // Previous end angle
              , eat = sat + a          // End angle
              , r = true;

          this.g.lineWidth = this.lineWidth;

          this.o.cursor
          && (sat = eat - 0.3)
          && (eat = eat + 0.3);

          if (this.o.displayPrevious) {
            ea = this.startAngle + this.angle(this.value);
            this.o.cursor
            && (sa = ea - 0.3)
            && (ea = ea + 0.3);
            this.g.beginPath();
            this.g.strokeStyle = this.previousColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
            this.g.stroke();
          }

          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
          this.g.stroke();

          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();

          return false;
        }
      }
    });
    /* END JQUERY KNOB */
	
}); // End of use strict
