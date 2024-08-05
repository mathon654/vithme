<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPhoneCode } from '@/api/user'
import { _notice } from '@/utils'

const router = useRouter()
const route = useRoute()

const timer = ref(60)
const showTime = ref(false)

const authCode = ref('')

const goStep = () => {
  if (!authCode.value) {
    _notice('请输入验证码')
    return
  }
  router.push({
    path: '/profile',
    query: {
      area: phoneData.area,
      mobile: phoneData.phone,
      regUid: route.query?.regUid,
      mobileChkCode: authCode.value
    }
  })
}
const getCode = () => {
  getPhoneCode({
    code: phoneData.area,
    mobile: phoneData.phone
  }).then((res) => {
    _notice('发送成功')
    console.log('res', res)
    showTime.value = true
    const interval = setInterval(() => {
      timer.value--
      if (timer.value === 0) {
        clearInterval(interval)
        timer.value = 60
        showTime.value = false
      }
    }, 1000)
  })
}
const phoneData = reactive({
  area: '86',
  phone: ''
})
onMounted(() => {
  if (route.query?.mobileArea) {
    phoneData.area = route.query.mobileArea
  }
  if (route.query?.phone) {
    phoneData.phone = route.query.phone
  }
})
</script>

<template>
  <div>
    <BaseHeader>
      <template v-slot:center>
        <span class="f16">验证码</span>
      </template>
    </BaseHeader>
    <div class="outer">
      <div class="authCode">
        <input
          v-model="authCode"
          placeholder="请输入验证码"
          class="text-white pl-[16rem] w-[100%] h-[100%] bg-transparent border-none"
          type="tel"
        />
      </div>
      <div v-if="!showTime" class="getAuthCode" @click="getCode">获取验证码</div>
      <div v-else class="getAuthCode">{{ timer }}s</div>
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
  margin-top: 100px;
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
  text-align: right;
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
