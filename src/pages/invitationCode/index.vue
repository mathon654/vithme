<script setup lang="ts">
import { ref } from 'vue'

const code = ref()
</script>

<template>
  <div>
    <div class="flexStyle">
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi1.png" />
      <div class="label">填写邀请码</div>
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi2.png" />
    </div>
    <div class="text-[14px] text-[#918B87] font-medium text-center mt-[18px]">
      恭喜您拥有如此高级的圈子和朋友
    </div>
    <div class="code mt-[45px]">
      <input
        type="text"
        v-model="code"
        placeholder="  请输入邀请码"
        style="
          background: rgba(255, 255, 255, 0);
          width: 100%;
          height: 39px;
          color: #57595c;
          border: none;
        "
      />
    </div>
    <div class="btn ml-[30px] h-[44px] mr-[30px] mt-[31px] flex justify-center items-center">
      激活账号
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
.code {
  border: 1px solid #918b87;
  border-radius: 6px;
  height: 44px;
  margin-left: 30px;
  margin-right: 30px;
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
