<script setup lang="ts">
import { ref } from 'vue'

const authCode = ref('')
</script>

<template>
  <div>
    <div class="outer">
      <div class="authCode">
        <van-field v-model="authCode" type="tel" label="手机号" placeholder="请输入验证码" />
      </div>
      <div class="getAuthCode">获取验证码</div>
    </div>
    <div class="nextStep">下一步</div>
  </div>
</template>

<style scoped lang="less">
.outer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #918b87;
  border-radius: 6px;
  margin-left: 30px;
  margin-right: 30px;
  height: 44px;
  margin-top: 21px;
}
.authCode {
  flex: 1;
  height: 44px;
}
.getAuthCode {
  width: 70px;
  font-size: 14px;
  color: #f8d4ac;
  font-weight: 500;
  margin-right: 20px;
}
.nextStep {
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: 30px;
  background-image: linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
