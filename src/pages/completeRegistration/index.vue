<script setup lang="ts"></script>

<template>
  <div>
    <div class="flexStyle">
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi1.png" />
      <div class="label">完成注册！</div>
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi2.png" />
    </div>
    <div
      class="ml-[16px] mr-[16px] rounded-[32px] bg-[#222425] text-[#918B87] text-[14px] pl-[29px] pr-[29px] mt-[19px] h-[63px] flex justify-center items-center"
    >
      vithme尊重每个用户的隐私，同时为了提升交际圈子的质量，请上传清晰露脸的本人照片。
    </div>
    <div class="flex justify-center items-center mt-[28px]">
      <img src="@/assets/svg/login_xinxi.png" class="w-[18px] h-[18px]" />
      <span class="text-[14px] text-[#F8D4AC] ml-[10px]">若发现使用网图将永久封号</span>
    </div>
    <div class="flex justify-center items-center mt-[21px]">
      <div class="relative">
        <img src="@/assets/svg/login_touxiang_nv.png" class="w-[186px] h-[186px]" />
        <img
          src="@/assets/svg/login_shangchuan.png"
          class="w-[44px] h-[44px] absolute bottom-[-14px] left-[40%]"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.flexStyle {
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 35px;
}
</style>
