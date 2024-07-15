<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goActive = () => {
  router.push('/invitationCode')
}
</script>

<template>
  <div>
    <div class="flex justify-center mt-[20px]">
      <img class="w-[90px] h-[90px]" src="@/assets/svg/home_liwu_3.png" />
    </div>
    <div class="label mt-[8px]">Eric</div>
    <div class="flex justify-center mt-[15px]">
      <div class="bg w-[38px] h-[46px] flex items-center justify-center">23</div>
      <div class="system">:</div>
      <div class="bg w-[38px] h-[46px] flex items-center justify-center">45</div>
      <div class="system">:</div>
      <div class="bg w-[38px] h-[46px] flex items-center justify-center">54</div>
    </div>
    <div class="ml-[35px] mr-[38px] mt-[19px] h-[102px]">
      <div class="text-[16px] text-[#918B87] text-center font-normal">您的资料正在审核中...</div>
      <div class="text-[16px] text-[#918B87] text-center font-normal">
        为保障交友质量，我们将严格审核每一份资料审核结果将在24小时后通知您
      </div>
    </div>
    <div
      class="btn ml-[30px] mr-[30px] h-[44px] text-[14px] text-[#3F2C10] font-normal flex items-center justify-center"
      @click="goActive"
    >
      填写邀请码，快速激活
    </div>
    <div
      class="audit ml-[30px] mt-[10px] mr-[30px] h-[44px] text-[14px] text-[#F8D4AC] font-normal flex items-center justify-center"
    >
      <img class="w-[13px] h-[13px]" src="@/assets/svg/login_vip.png" />
      <span class="ml-[8px]">成为会员，跳过审核</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.label {
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

.bg {
  background-image: linear-gradient(143deg, #36373d 1%, #4e5058 49%, #323337 100%);
  border: 2px solid #4e4e4e;
  border-radius: 6px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

.system {
  height: 46px;
  width: 10px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
}

.btn {
  background-image: linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%),
    linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
}

.audit {
  border: 1px solid #979797;
  border-radius: 6px;
}
</style>
