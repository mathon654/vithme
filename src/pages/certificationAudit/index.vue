<script lang="ts" setup></script>

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
    <div class="mt-[23px] flex justify-center items-center">
      <div class="w-[22px] h-[22px]">
        <img alt="" class="w-[100%] h-[100%]" src="@/assets/svg/login_tijiao.png" />
      </div>
      <div class="text-[#62CB63] text-[14pxx] font-medium ml-[9px]">资料已提交</div>
    </div>
    <div
      class="btn mt-[41px] ml-[30px] mr-[30px] h-[44px] text-[14px] text-[#3F2C10] font-normal flex items-center justify-center"
    >
      提交高级认证
    </div>
    <div class="footer ml-[30px] mr-[30px] h-[169px] mt-[18px] pb-[19px]">
      <div class="text-[#918B87] text-[12px] font-normal text-center mt-[4px]">
        请添加官方管理员联系方式
      </div>
      <div class="flex justify-between items-center mt-[25px]">
        <div class="ml-[18px] flex items-center">
          <img class="w-[20px] h-[20px]" src="@/assets/svg/login_tijiao_jieqi.png" />
          <span class="text-[#CDC7C4] ml-[10px] text-[14px] font-normal">WhatApp：387289190</span>
        </div>
        <div class="mr-[24px]">
          <span class="copy w-[48px] h-[24px] flex justify-center items-center">复制</span>
        </div>
      </div>
      <div class="flex justify-between items-center mt-[22px]">
        <div class="ml-[18px] flex items-center">
          <img class="w-[20px] h-[20px]" src="@/assets/svg/login_tijiao_jieqi.png" />
          <span class="text-[#CDC7C4] ml-[10px] text-[14px] font-normal">WhatApp：387289190</span>
        </div>
        <div class="mr-[24px]">
          <span class="copy w-[48px] h-[24px] flex justify-center items-center">复制</span>
        </div>
      </div>
      <div class="flex justify-between items-center mt-[22px]">
        <div class="ml-[18px] flex items-center">
          <img class="w-[20px] h-[20px]" src="@/assets/svg/login_tijiao_jieqi.png" />
          <span class="text-[#CDC7C4] ml-[10px] text-[14px] font-normal">WhatApp：387289190</span>
        </div>
        <div class="mr-[24px]">
          <span class="copy w-[48px] h-[24px] flex justify-center items-center">复制</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div
        class="absolute w-[315px] findPeople h-[63px] ml-[30px] mr-[30px] text-[#F8D4AC] font-normal text-[14px] text-center leading-[64px] bottom-[62px]"
      >
        发现了你可能感兴趣的人
      </div>
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
  background-image: linear-gradient(90deg, #57595c 0%, #918b87 99%);
  border-radius: 6px;
}

.audit {
  border: 1px solid #979797;
  border-radius: 6px;
}

.footer {
  background: url('@/assets/svg/login_lianxi_bg.png') no-repeat;
  background-size: cover;
}

.copy {
  border: 1px solid #979797;
  border-radius: 6px;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 400;
}

.findPeople {
  background: #222425;
  border-radius: 32px;
}
</style>
