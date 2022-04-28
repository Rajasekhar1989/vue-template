<template>
    <apexchart id="vuechart-example" ref="demoChart" width="550"  type="bar" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name:'VerticalBarChart',
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
            toolbar: {
              show: false // Download as SVG, PNG , Show and Hide
            },
          },
          stroke: {
            colors: ["transparent"],
            width: 5
          },
          plotOptions: {
            bar: {
              vertical: true,
              columnWidth: '10',
              distributed: true,               
            },            
          },
          xaxis: {
            categories: ["Major", "Minor"],   
          },
          colors :[ '#34a195', '#dc3545' ], // Serires Colors should be hashcode only to apply both labels and Bars       
        },
        series: 
        [
          {
            name: 'series-1',
            data: [50, 70],
          },
          // {
          //   name: 'series-2',
          //   data: [10, 30],
          // },
        ]
      }
    },
}
</script>