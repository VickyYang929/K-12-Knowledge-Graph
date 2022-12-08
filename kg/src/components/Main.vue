<template>

<div>
        <!-- <el-button plain>朴素按钮</el-button> -->
        
        <!-- <el-button type="success" plain :disabled=mydata3>成功按钮</el-button> -->
        <!-- <el-button type="info" plain >信息按钮</el-button> -->
        <!-- <el-button v-if="mydata==='Love Vicky!'" type="warning" plain>警告按钮</el-button> -->
        <!-- <el-button v-for="item in mydata2" type="danger" plain>{{mydata}}</el-button> -->
  <el-container>
    <el-header style="font-size: 30px; height: 100px;border-bottom: 2px solid black">
      Knowledge Graph
      </el-header>
      <el-container>
    <el-aside width="50%" style="border-right: 2px solid black">
      <!-- <el-button type="primary" plain @click="function_chuancan()">AXIOS</el-button> -->
    <el-button type="warning" plain @click="getChart()">蜻蜓</el-button>
    </el-aside>
      <el-main>
    <div id="mychart" style="width: 50vw; height: calc(100vh - 100px)"></div>
    </el-main>
  </el-container>
  </el-container>
</div>

</template>

<script>
export default {
  data () {
    return {
// 储存数据
    // mydata:123,
    // mydata2:[1,2,3],
    // mydata3:false,
    option: {
  title: {
    text: 'Basic Graph'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 50,
      roam: true,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: '蜻蜓',
          x: 300,
          y: 300
        },
        {
          name: '昆虫',
          x: 800,
          y: 300
        },
        {
          name: 'Node 3',
          x: 550,
          y: 100
        },
        {
          name: 'Node 4',
          x: 550,
          y: 500
        }
      ],
      // links: [],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true
          },
          lineStyle: {
            width: 5,
            curveness: 0.2
          }
        },
        {
          source: 'Node 2',
          target: 'Node 1',
          label: {
            show: false
          },
          lineStyle: {
            curveness: 0.2
          }
        },
        {
          source: 'Node 1',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 4'
        },
        {
          source: 'Node 1',
          target: 'Node 4'
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
}
    

        
    }
  },
  methods: {
    //函数写在这
    // function_chuancan(){
    //     const that = this
    //     this.$axios.post('https://duy9gtyx33.execute-api.us-east-1.amazonaws.com/love/love').then(res => {
    //     alert(res.data.body)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // },
    getChart(){
      const myChart = this.$echarts.init(document.getElementById('mychart'))
      this.option.series[0].data[0].name = '蜻蜓'
      myChart.setOption(this.option)
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
