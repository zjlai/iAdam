<template>
  <chart :options="options" :init-options="initOptions" class="chart" />
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
        value: 11,
        children: [
          { name: '1a', value: 4 },
          { name: '1b', value: 7 }
        ]
      },
      { name: 'Chpt 2',
        value: 23,
        children: [
          { name: '2a', value: 5 },
          { name: '2b', value: 7 },
          { name: '2c', value: 4 },
          { name: '2d', value: 7 }
        ]
      },
      { name: 'Chpt 3',
        value: 16,
        children: [
          { name: '3a', value: 5 },
          { name: '3b', value: 6 },
          { name: '3c', value: 5 }
        ]
      },
      { name: 'Chpt 4',
        value: 19,
        children: [
          { name: '4a', value: 4 },
          { name: '4b', value: 8 },
          { name: '4c', value: 7 }
        ]
      },
      { name: 'Chpt 5',
        value: 26,
        children: [
          { name: '5a', value: 5 },
          { name: '5b', value: 5 },
          { name: '5c', value: 4 },
          { name: '5d', value: 5 },
          { name: '5e', value: 7 }
        ]
      },
      { name: 'Chpt 6',
        value: 8,
        children: [
          { name: '6a', value: 4 },
          { name: '6b', value: 4 }
        ]
      }
    ]
    return {
      initOptions: {
        renderer: 'svg'
      },
      options: {
        series: {
          type: 'sunburst',
          data: data,
          highlightPolicy: 'descendant',
          width: '360',
          center: ['50%', '50%'],
          radius: ['24%', '100%'],
          label: {
            rotate: 'radial'
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
