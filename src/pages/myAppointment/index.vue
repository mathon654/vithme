<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref([
  { label: '7天', checked: true },
  { label: '15天', checked: false },
  { label: '30天', checked: false },
  { label: '其他', checked: false }
])
</script>

<template>
  <div>
    <div>
      <div class="relative pt-[39px] outer h-[100px]">
        <img class="w-[90px] h-[90px] absolute left-[30%]" src="@/assets/svg/zhuye_nv.png" />
        <img
          class="w-[60px] h-[60px] absolute left-[45%] top-[84px] z-10"
          src="@/assets/svg/xin1@3x.png"
        />
        <img class="w-[90px] h-[90px] absolute left-[50%]" src="@/assets/svg/zhuye_nv.png" />
      </div>
      <div class="text-[#FFFFFF] text-[20px] font-medium text-center">您与Angelababy的约会</div>
      <div class="text-[#918B87] text-[14px] font-normal text-center mt-[3px]">
        支付保证金点亮缘份爱心
      </div>
    </div>
    <div class="ml-[16px] mt-[20px]">
      <div class="text-[14px] text-[#FFFFFF] font-normal">请选择想要与TA约会的天数</div>
    </div>
    <div class="flex flex-wrap justify-center items-center">
      <div
        v-for="item in checkList"
        :key="item.label"
        :class="item.checked ? 'checked' : 'active'"
        class="w-[165px] h-[60px] bg flex items-center justify-center mr-[13px] mt-[12px]"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="tips w-[69px] h-[27px] flex justify-center items-center mt-[31px] ml-[19px]">
      温馨提示
    </div>
    <div class="ml-[19px] mr-[19px] text-[#918B87] text-[12px] font-normal mt-[3px]">
      为保障良好约会体验，建议您在预约前先与客服沟通，核实详细信息后再进行预约!
    </div>
    <div class="ml-[19px] mr-[19px] text-[#918B87] text-[12px] font-normal">
      请勿私下给任何人转账!由此造成的经济损失平台一概不负任何责任!
    </div>
    <div class="btn ml-[30px] mr-[30px] flex justify-center items-center h-[44px] mt-[46px]">
      支付约会保证金100000金币
    </div>
    <div class="text-center text-[#918B87] text-[12px] font-normal mt-[11px]">
      若约会取消，保证金24小时内自动退回账户
    </div>
  </div>
</template>

<style lang="less" scoped>
.outer {
}

.bg {
  background: url('@/assets/svg/btn2_bg@3x.png') no-repeat;
  background-size: cover;
}

.active {
  font-size: 24px;
  color: #a19893;
  letter-spacing: 0;
  font-weight: 600;
}

.checked {
  font-size: 24px;
  color: #f8d4ac;
  letter-spacing: 0;
  font-weight: 600;
}

.tips {
  border: 1px solid #3a3630;
  border-radius: 4px;
  font-size: 12px;
  color: #918b87;
  letter-spacing: 0;
  font-weight: 400;
}

.btn {
  background-image: linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
  font-size: 14px;
  color: #3f2c10;
  letter-spacing: 0;
  font-weight: 500;
}
</style>
