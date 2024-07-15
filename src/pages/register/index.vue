<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const authCode = ref('')

const goStep = () => {
  router.push('/profile')
}
</script>

<template>
  <div>
    <div class="outer">
      <div class="authCode">
        <input
          v-model="authCode"
          placeholder="请输入验证码"
          style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0); border: none"
          type="tel"
        />
      </div>
      <div class="getAuthCode">获取验证码</div>
    </div>
    <div class="nextStep" @click="goStep">下一步</div>
  </div>
</template>

<style lang="less" scoped>
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
