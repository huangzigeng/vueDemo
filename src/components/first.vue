<template>
  <div>
    <canvas id="can" width="500" height="800"></canvas>
    <button @click="first()">点我</button>
    <router-link to="/">home</router-link>
  </div>
</template>
<script>
import mixin from "@/mixins/first";
import { setInterval, clearInterval, setTimeout } from 'timers';
export default {
  mixins: [mixin],
  data() {
    return {
      x: null,
      z: null,
      y: null,
      isMotion: true
    };
  },
  mounted() {
    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", this.deviceMotionHandle, false);
    } else {
      console.log("不支持摇一摇");
    }
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    this.init();
  },
  destroyed () {
     window.removeEventListener("devicemotion", this.deviceMotionHandle, false);
  },
  methods: {
    deviceMotionHandle(eventData) {
      if (!this.x) {
        this.x = eventData.accelerationIncludingGravity.x;
        this.y = eventData.accelerationIncludingGravity.y;
        this.z = eventData.accelerationIncludingGravity.z;
      }
     
      if (
        (Math.abs(this.x - eventData.accelerationIncludingGravity.x) +
          Math.abs(this.y - eventData.accelerationIncludingGravity.y) +
          Math.abs(this.z - eventData.accelerationIncludingGravity.z) > 50 )
          && this.isMotion && this.$route.fullPath === '/first'
      ) {
        // 在这里获取数据  完成相关操作后   将isMotion 和 this.x y z重置为初始值
        navigator.vibrate([1000,500,1000])
        this.isMotion = false
        setTimeout(() => {
          this.x = null
          this.y = null
          this.z = null
          this.isMotion = true
        },10000)
      }
    },
    init() {
      let can = document.getElementById("can");
      let ctx = can.getContext("2d");
      for (let i = 0; i < 50; i++) {
        this.drawArc(ctx);
      }
    },
    drawArc(ctx) {
      ctx.beginPath()
      ctx.stroke()
    },
    first() {
      console.log(this);
    }
  }
};
</script>
<style>
</style>
