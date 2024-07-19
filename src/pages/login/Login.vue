<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tel = ref()

const goRegister = () => {
  router.push('/register')
}
</script>
<template>
  <div class="bg">
    <div class="label">DEMO</div>
    <div class="phone">
      <div class="area">+86</div>
      <div class="phoneNumber">
        <input type="text" class="phoneInput" />
      </div>
    </div>
    <div class="nextStep" @click="goRegister">下一步</div>
    <div class="flex">
      <span class="text1">注册即代表您已同意vithme的</span>
      <span class="text2">《用户协议》</span>
      <span class="text2">《隐私协议》</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100%;
  background: url('@/assets/svg/login_bg.png') no-repeat;
  background-size: contain;
}

.label {
  font-size: 52px;
  color: #e1b486;
  font-weight: 600;
  text-align: center;
  margin-top: 149px;
}

.phone {
  border: 1px solid #918b87;
  display: flex;
  align-items: center;
  border-radius: 6px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 90px;
  height: 44px;
}

.area {
  height: 26px;
  font-size: 14px;
  color: #cdc7c4;
  font-weight: 500;
  padding-right: 8px;
  margin-left: 19px;
  border-right: 1px solid #918b87;
}

.phoneNumber {
  flex: 1;
  height: 44px;
}
.phoneInput {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  font-size: 14px;
  color: #cdc7c4;
  font-weight: 500;
  padding-left: 10px;
  outline: none;
  &:focus {
    outline: none;
  }
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

.flex {
  margin-left: 37px;
  margin-right: 37px;
  margin-top: 14px;
}

.text1 {
  font-size: 12px;
  color: #918b87;
  line-height: 17px;
  font-weight: 400;
}

.text2 {
  font-size: 12px;
  color: #f8d4ac;
  line-height: 17px;
  font-weight: 500;
}
</style>
