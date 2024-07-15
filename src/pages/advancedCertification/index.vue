<script lang="ts" setup></script>

<template>
  <div>
    <div class="text-[16px] text-[#918B87] mt-[20px] font-normal text-center">
      高级认证需要您对着镜头录制以下文案
    </div>
    <div
      class="ml-[16px] mr-[16px] rounded-[32px] bg-[#222425] text-[#F8D4AC] text-[16px] pl-[29px] pr-[29px] mt-[19px] h-[63px] flex justify-center items-center"
    >
      我是xxx(您的昵称或姓名)，我申请加入唯秘
    </div>
    <div class="mt-[35px] ml-[40px] mr-[40px] flex justify-center">
      <img class="w-[290px] h-[290px]" src="@/assets/svg/login_shangchuan.png" />
    </div>
    <div class="btn h-[44px] mt-[40px] ml-[30px] mr-[30px] flex items-center justify-center">
      开始录制
    </div>
  </div>
</template>

<style lang="less" scoped>
.btn {
  background-image: linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
  font-size: 14px;
  color: #3f2c10;
  letter-spacing: 0;
  font-weight: 400;
}
</style>
