<template>
  <chart :options="options" :init-options="initOptions" class="chart" @click="callback" />
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/sunburst'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'

export default {
  name: 'ComponentSunburst',
  components: {
    chart: ECharts
  },
  data () {
    var data = [
      { name: 'Chpt 1',
        value: [11, 68],
        children: [
          { name: '1a', value: [4, 90] },
          { name: '1b', value: [7, 50] }
        ]
      },
      { name: 'Chpt 2',
        value: [23, 80],
        children: [
          { name: '2a', value: [5, 80] },
          { name: '2b', value: [7, 78] },
          { name: '2c', value: [4, 90] },
          { name: '2d', value: [7, 62] }
        ]
      },
      { name: 'Chpt 3',
        value: [16, 95],
        children: [
          { name: '3a', value: [5, 100] },
          { name: '3b', value: [6, 90] },
          { name: '3c', value: [5, 95] }
        ]
      },
      { name: 'Chpt 4',
        value: [19, 60],
        children: [
          { name: '4a', value: [4, 80] },
          { name: '4b', value: [8, 50] },
          { name: '4c', value: [7, 50] }
        ]
      },
      { name: 'Chpt 5',
        value: [26, -1],
        children: [
          { name: '5a', value: [5, 60] },
          { name: '5b', value: [5, 40] },
          { name: '5c', value: [4, -1] },
          { name: '5d', value: [5, -1] },
          { name: '5e', value: [7, -1] }
        ]
      },
      { name: 'Chpt 6',
        value: [8, -1],
        children: [
          { name: '6a', value: [4, -1] },
          { name: '6b', value: [4, -1] }
        ]
      }
    ]
    return {
      initOptions: {
        renderer: 'svg'
      },
      options: {
        visualMap: [
          {
            orient: 'horizontal',
            top: 'bottom',
            left: 'center',
            type: 'piecewise',
            inverse: true,
            // min: 0,
            // max: 100,
            // range: [1, 100],
            pieces: [
              { min: 91, max: 100, label: 'A*', color: 'rgba(0, 0, 255, 1)' },
              { min: 75, max: 90, label: 'A', color: 'rgba(0, 0, 255, 0.8)' },
              { min: 60, max: 74, label: 'B*', color: 'rgba(0, 0, 255, 0.5)' },
              { min: 50, max: 59, label: 'C', color: 'rgba(255, 0, 0, 0.5)' },
              { min: 35, max: 49, label: 'D', color: 'rgba(255, 0, 0, 0.7)' },
              { min: 20, max: 34, label: 'E', color: 'rgba(255, 0, 0, 1)' },
              { min: 0, max: 19, label: 'U', color: 'rgba(255, 0, 0, 1)' },
              { max: 0, label: 'Not Taught', color: 'rgba(0, 0, 0, 0.5)' }
            ],
            calculable: false,
            realtime: true,
            show: false
          }
        ],
        series: {
          type: 'sunburst',
          data: data,
          highlightPolicy: 'descendant',
          center: ['50%', '45%'],
          radius: ['0', '90%'],
          label: {
            rotate: 'radial'
          },
          sort: null,
          nodeClick: false,
          levels: [
            {},
            {
              r0: '25%',
              r: '80%',
              label: {
                align: 'center',
                rotate: 'radial',
                padding: 3
              }
            },
            {
              r0: '80%',
              r: '87%',
              label: {
                position: 'outside',
                padding: 3,
                silent: false,
                color: 'auto',
                fontWeight: 600
              },
              itemStyle: {
                borderWidth: 2
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    callback (event) {
      console.log(event.name)
      console.log(event.data.children)
    }
  }
}
</script>

<style>
.echarts.chart {
  width: 100% !important;
}
</style>
