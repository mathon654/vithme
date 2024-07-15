<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex justify-center mt-[20px]">
      <img src="@/assets/svg/home_liwu_3.png" class="w-[90px] h-[90px]" />
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
      <div class="text-[16px] text-[#918B87] text-center font-normal">资料已提交</div>
      <div class="text-[16px] text-[#918B87] text-center font-normal">
        请在24小时内完成高级认证认证通过后，即可入驻Vithme
      </div>
    </div>
    <div
      class="btn ml-[30px] mr-[30px] h-[44px] text-[14px] text-[#3F2C10] font-normal flex items-center justify-center"
    >
      提交高级认证
    </div>
  </div>
</template>

<style scoped lang="less">
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
