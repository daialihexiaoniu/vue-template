<template>
  <div>
    <canvas ref="mycanvas" width="500" height="500" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CanvasImg',
  computed: mapState({
    canvasPointer: state => state.canvasPointer
  }),
  mounted() {
    this.mycanvas = this.$refs.mycanvas
    this.context = this.mycanvas.getContext('2d')
    if (this.canvasPointer.length == 0) {
      this.drawPath({
        x: 250,
        y: 250,
        num: 6,
        r: 100
      })
    } else {
      this.drawPathByPointer(this.canvasPointer)
    }
  },
  methods: {
    drawText(conf) {
      const x = (conf && conf.x) || 0 // 中心点x坐标
      const y = (conf && conf.y) || 0 // 中心点y坐标
      const text = (conf && conf.text) || '' // 中心点y坐标
      const fillStyle = (conf && conf.fillStyle) || 'red'
      this.context.fillStyle = fillStyle
      this.context.font = '14px'
      this.context.fillText(text, x, y)
    },
    drawPath(conf) {
      const x = (conf && conf.x) || 0 // 中心点x坐标
      const y = (conf && conf.y) || 0 // 中心点y坐标
      const num = (conf && conf.num) || 3 // 图形边的个数
      const r = (conf && conf.r) || 100 // 图形的半径
      const pointerArr = []
      // 开始路径
      this.context.beginPath()
      const startX = x + r * Math.cos((2 * Math.PI * 0) / num)
      const startY = y + r * Math.sin((2 * Math.PI * 0) / num)
      const pointA = [startX, startY]
      pointerArr.push(pointA)
      this.context.moveTo(startX, startY)
      for (let i = 1; i <= num; i++) {
        const newX = x + r * Math.cos((2 * Math.PI * i) / num)
        const newY = y + r * Math.sin((2 * Math.PI * i) / num)
        this.drawLine(newX, newY, i)
      }
      this.drawLine(startX, startY, num + 1)

      this.context.fillStyle = '#9da'
      this.context.fill()

      // 绘制坐标 坐标显示保留两位
      this.drawText({
        text: `{${startX.toFixed(2)},${startY.toFixed(2)}}`,
        x: startX,
        y: startY
      })
      for (let i = 1; i < num; i++) {
        const newX = x + r * Math.cos((2 * Math.PI * i) / num)
        const newY = y + r * Math.sin((2 * Math.PI * i) / num)
        const pointA = [newX, newY]
        pointerArr.push(pointA)
        this.drawText({
          text: `{${newX.toFixed(2)},${newY.toFixed(2)}}`,
          x: newX,
          y: newY
        })
      }
      this.$store.dispatch('setCanvasPointer', pointerArr)
    },
    drawPathByPointer(pointArr) {
      const pointerArr = []
      this.context.beginPath()
      this.context.moveTo(pointArr[0][0], pointArr[0][1])
      for (let i = 1; i < pointArr.length; i++) {
        this.drawLine(pointArr[i][0], pointArr[i][1], i)
      }
      this.drawLine(pointArr[0][0], pointArr[0][1], pointArr.length)

      this.context.fillStyle = '#9da'
      this.context.fill()

      this.drawText({
        text: `{${pointArr[0][0].toFixed(2)},${pointArr[0][1].toFixed(2)}}`,
        x: pointArr[0][0],
        y: pointArr[0][1]
      })
      for (let i = 1; i < pointArr.length; i++) {
        const newX = pointArr[i][0]
        const newY = pointArr[i][1]
        const pointA = [newX, newY]
        pointerArr.push(pointA)
        this.drawText({
          text: `{${newX.toFixed(2)},${newY.toFixed(2)}}`,
          x: newX,
          y: newY
        })
      }
    },
    drawLine(pointA, pointB, i) {
      this.context.strokeStyle = '#ff0000'

      setTimeout(() => {
        this.context.lineTo(pointA, pointB)
        this.context.stroke()
      }, i * 500)
    }
  }
}
</script>
