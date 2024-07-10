<script setup lang="ts">
import { ref } from 'vue'

const userName = ref()
</script>

<template>
  <div>
    <div class="flexStyle">
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi1.png" />
      <div class="label">只差1步，完善资料</div>
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi2.png" />
    </div>
    <div class="userName">
      <van-field v-model="userName" placeholder="请输入您的姓名或昵称" />
    </div>
    <div class="userName">
      <van-field v-model="userName" placeholder="请选择您的生日" />
    </div>
    <div class="userName">
      <van-field v-model="userName" placeholder="请输入您的姓名或昵称" />
    </div>
  </div>
</template>

<style scoped lang="less">
.flexStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 61px;
}
.label {
  font-size: 20px;
  color: #f8d4ac;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}
.imgWidth {
  width: 30px;
  height: 30px;
}
.userName {
  border: 1px solid #918b87;
  border-radius: 6px;
  margin-top: 55px;
  height: 44px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
