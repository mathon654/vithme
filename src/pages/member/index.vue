<script lang="ts" setup></script>

<template>
  <div>
    <div class="outer relative">
      <div class="absolute bottom-[13px] text-center w-full">
        <div class="text-[39px] text-[#FFFFFF] font-semibold">尊享VIP</div>
        <div class="text-[30px] text-[#DEDE7B] font-semibold">5888/年</div>
      </div>
    </div>
    <div class="">
      <img class="h-[216px] w-full" src="@/assets/svg/img_1.png" />
    </div>
    <div>
      <img class="h-[186px] w-full" src="../../assets/svg/shuoming.jpg" />
    </div>
    <div class="btn ml-[30px] mr-[30px] h-[44px] flex justify-center items-center mt-[25px]">
      成为会员
    </div>
    <div class="text-center mt-[18px]">
      <span class="text-[12px] text-[#CDC7C4] font-normal">成为会员即代表已阅读并同意</span>
      <span class="text-[#F8D4AC] font-normal text-[12px]">《Vithme用户使用协议》</span>
    </div>
    <div class="text-center">
      <span class="text-[12px] text-[#CDC7C4] font-normal">及</span>
      <span class="text-[#F8D4AC] font-normal text-[12px]">《Vithme用户付费协议》</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.outer {
  height: 298px;
  background: url('@/assets/svg/huiyuan_tou@2x.png') no-repeat;
  background-size: cover;
}

.btn {
  background-image: linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
  font-size: 14px;
  color: #3f2c10;
  letter-spacing: 0;
  font-weight: 400;
}
</style>
