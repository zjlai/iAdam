<template>
  <chart :options="options" :init-options="initOptions" class="chart" />
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/treemap'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/tooltip'

export default {
  name: 'ComponentTreemap',
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
        title: {
          top: 5,
          left: 'center',
          show: true,
          text: 'How am I doing?',
          subtext: 'Subject Breakdown'
        },
        visualMap: [
          {
            orient: 'horizontal',
            top: 'bottom',
            left: 'center',
            type: 'continuous',
            min: 0,
            max: 100,
            range: [1, 100],
            calculable: true,
            realtime: true,
            text: ['Strong', 'Weak'],
            inRange: {
              // color: ['#de6161', '#2657eb']
              color: ['rgba(0, 0, 255, 0.1)', 'rgba(0, 0, 255, 0.2)', 'rgba(0, 0, 255, 0.3)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 1)']
            },
            outOfRange: {
              color: 'rgba(0, 0, 0, 0.5)'
            }
          }
        ],
        series: {
          name: 'Subject',
          type: 'treemap',
          data: data,
          left: 'center',
          top: 'center',
          leafDepth: 1,
          squareRatio: 0.75,
          roam: false,
          visibleMin: 30,
          label: {
            show: true
          },
          itemStyle: {
            normal: {
              borderColor: '#fff'
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.echarts.chart {
  width: 100% !important;
}
</style>
