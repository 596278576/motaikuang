<template>
  <div>
    <div class="click" @click="handelClick">点击</div>
    <div class="mode" v-if="isShow==true">
      <div class="mode-min">
        <button @click="init">取消</button>
        <button @click="handelEnter" :disabled="isEnter">确认{{time}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      time: 3,
      isEnter:true,
      timeId:''
    };
  },
  methods: {
    handelClick() {
      this.isShow = true;
      this.timeId = setInterval(() => {
        this.time--;
        if(this.time==0){
            clearInterval(this.timeId)
            this.isEnter=false
        }
      }, 1000);
    },
    handelEnter() {
        this.init()
    },
    init(){
        clearInterval(this.timeId)
        this.isShow=false
        this.time=3
        this.isShow=false
        this.isEnter=true
    }
  }
};
</script>

<style scoped>
.click {
  background: skyblue;
  width: 40px;
  color: #fff;
  text-align: center;
}
.mode {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mode-min {
  margin-top: 40px;
  padding: 20%;
  background: #fff;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>