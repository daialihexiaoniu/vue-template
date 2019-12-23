<template>
    <div>
        <canvas ref="mycanvas" width='500' height='500'></canvas>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'canvasImg',
        computed: mapState({
            canvasPointer: state => state.canvasPointer
        }),
        mounted() {
            this.mycanvas = this.$refs.mycanvas
            this.context = this.mycanvas.getContext('2d');
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
                let x = conf && conf.x || 0; //中心点x坐标
                let y = conf && conf.y || 0; //中心点y坐标
                let text = conf && conf.text || ''; //中心点y坐标
                let fillStyle = conf && conf.fillStyle || 'red';
                this.context.fillStyle = fillStyle
                this.context.font = '14px'
                this.context.fillText(text, x, y)
            },
            drawPath(conf) {
                let x = conf && conf.x || 0; //中心点x坐标
                let y = conf && conf.y || 0; //中心点y坐标
                let num = conf && conf.num || 3; //图形边的个数
                let r = conf && conf.r || 100; //图形的半径
                let pointerArr = [];
                //开始路径
                this.context.beginPath();
                let startX = x + r * Math.cos(2 * Math.PI * 0 / num);
                let startY = y + r * Math.sin(2 * Math.PI * 0 / num);
                let pointA = [startX, startY];
                pointerArr.push(pointA);
                this.context.moveTo(startX, startY);
                for (let i = 1; i <= num; i++) {
                    let newX = x + r * Math.cos(2 * Math.PI * i / num);
                    let newY = y + r * Math.sin(2 * Math.PI * i / num);
                    this.context.lineTo(newX, newY);
                }
                this.context.closePath();

                this.context.fillStyle = '#9da';
                this.context.fill();

                // 绘制坐标 坐标显示保留两位
                this.drawText({
                    text: `{${startX.toFixed(2)},${startY.toFixed(2)}}`,
                    x: startX,
                    y: startY
                })
                for (let i = 1; i < num; i++) {
                    let newX = x + r * Math.cos(2 * Math.PI * i / num);
                    let newY = y + r * Math.sin(2 * Math.PI * i / num);
                    let pointA = [newX, newY];
                    pointerArr.push(pointA);
                    this.drawText({
                        text: `{${newX.toFixed(2)},${newY.toFixed(2)}}`,
                        x: newX,
                        y: newY
                    })
                }
                this.$store.dispatch('setCanvasPointer', pointerArr);
            },
            drawPathByPointer(pointArr) {
                let pointerArr = [];
                this.context.beginPath();
                this.context.moveTo(pointArr[0][0], pointArr[0][1]);
                for (let i = 1; i < pointArr.length; i++) {
                    this.context.lineTo(pointArr[i][0], pointArr[i][1]);
                }
                this.context.closePath();
                this.context.fillStyle = '#9da';
                this.context.fill();

                this.drawText({
                    text: `{${pointArr[0][0].toFixed(2)},${pointArr[0][1].toFixed(2)}}`,
                    x: pointArr[0][0],
                    y: pointArr[0][1]
                })
                for (let i = 1; i < pointArr.length; i++) {
                    let newX = pointArr[i][0];
                    let newY = pointArr[i][1];
                    let pointA = [newX, newY];
                    pointerArr.push(pointA);
                    this.drawText({
                        text: `{${newX.toFixed(2)},${newY.toFixed(2)}}`,
                        x: newX,
                        y: newY
                    })
                }
            }
        }
    }
</script>