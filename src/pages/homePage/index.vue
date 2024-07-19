<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref([
  { label: '资料', checked: true },
  { label: '兴趣', checked: false }
])

const handleCheck = (item) => {
  checkList.value = checkList.value.map((itm) => {
    return {
      ...itm,
      checked: item.label === itm.label
    }
  })
}
</script>

<template>
  <div class="h-[100vh] overflow-y-auto">
    <div>
      <img
        class="w-full h-[337px]"
        src="https://img.tol.vip/avatar/WEIXIN/3aSuTGYTzjHvcHy0y0tH1eiShKRk9Sgd.jpg?_upt=de4a5c251709635127"
      />
    </div>
    <div class="content">
      <div
        class="ml-[16px] pt-[19px] text-[20px] font-semibold text-[#ffffff]"
        style="display: flex; align-items: center"
      >
        <span>可爱的女人</span>
        <img class="w-[24px] h-[24px] ml-[8px]" src="@/assets/svg/zhuye_nv.png" />
      </div>
      <div class="ml-[16px] mr-[16px] mt-[10px] flex justify-between borderBottom">
        <div>
          <div style="display: flex; align-items: center">
            <img class="w-[16px] h-[16px]" src="@/assets/svg/zhuye_zhiye.png" />
            <span class="text-[12px] text-[#FFFFFF] font-normal ml-[8px]">车模、选美冠军</span>
          </div>
          <div class="mt-[6px]" style="display: flex; align-items: center">
            <img class="w-[16px] h-[16px]" src="@/assets/svg/zhuye_zhiye.png" />
            <span class="text-[12px] text-[#FFFFFF] font-normal ml-[8px]">车模、选美冠军</span>
          </div>
        </div>
        <div class="btn flex justify-center items-center text-[14px] text-[#3F2C10] font-medium">
          关注
        </div>
      </div>
      <div class="ml-[16px] mt-[17px]" style="display: flex; align-items: center">
        <div v-for="(item, index) in checkList" :key="index" @click="handleCheck(item)">
          <div
            v-if="item.checked"
            :style="{ marginLeft: index === 1 ? '35px' : '' }"
            class="text-[20px] text-[#FFFFFF] font-semibold"
          >
            {{ item.label }}
          </div>
          <div
            v-else
            :style="{ marginLeft: index === 1 ? '35px' : '' }"
            class="text-[18px] text-[#918B87] font-normal"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
      <div v-if="checkList[0].checked">
        <div class="bg h-[105px] mt-[16px]">
          <div style="display: flex; justify-content: center; align-items: center">
            <div class="w-[54px] h-[2px] line"></div>
            <div class="text-[16px] text-[#F8D4AC] font-medium ml-[7px] mr-[7px]">交友宣言</div>
            <div class="w-[54px] h-[2px] line"></div>
          </div>
          <div
            class="text-[#FFFFFF] text-[14px] font-normal flex justify-center items-center ml-[14px] mr-[14px] mt-[11px]"
          >
            宁缺毋滥，我喜欢漂洋过海的浪漫，也喜欢柴米油盐的平淡。重要的是，有你陪伴。
          </div>
        </div>
        <div>
          <div class="mt-[26px] ml-[16px] text-[#CDC7C4] font-medium text-[16px]">基本资料</div>
          <div style="display: flex">
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">城市：</div>
              <div class="value">北京</div>
            </div>
            <div class="mt-[13px] w-[48%]" style="display: flex">
              <div class="label">生日：</div>
              <div class="value">2001-09-20</div>
            </div>
          </div>
          <div style="display: flex">
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">身高：</div>
              <div class="value">170CM</div>
            </div>
            <div class="mt-[13px] w-[48%]" style="display: flex">
              <div class="label">体重：</div>
              <div class="value">49kg</div>
            </div>
          </div>
          <div style="display: flex">
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">三围：</div>
              <div class="value">79-58-88</div>
            </div>
          </div>
        </div>
        <div>
          <div class="mt-[23px] ml-[16px] text-[#CDC7C4] font-medium text-[16px]">详细资料</div>
          <div>
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">职业：</div>
              <div class="value">北京，选美冠军</div>
            </div>
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">学校：</div>
              <div class="value">上海戏剧学院</div>
            </div>
          </div>
          <div>
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">收入：</div>
              <div class="value">50-100万</div>
            </div>
            <div class="ml-[16px] mt-[13px] w-[48%]" style="display: flex">
              <div class="label">足迹：</div>
            </div>
          </div>
        </div>
        <div
          class="ml-[16px] mr-[16px] h-[78px] mt-[13px] bottomBg flex justify-center items-center"
        >
          北京、上海、深圳、泰国、马来西亚、新加坡
        </div>
        <div class="flex justify-center items-center mt-[40px]">
          <div class="yuyue">预约</div>
          <div class="yuyue ml-[20px]">私信</div>
        </div>
      </div>
      <div v-if="checkList[1].checked" class="mt-[22px]" style="display: flex; flex-wrap: wrap">
        <img class="w-[32%] h-[165px] mr-[2px]" src="@/assets/svg/login_shipin.png" />
        <img class="w-[32%] h-[165px] mr-[2px]" src="@/assets/svg/login_shipin.png" />
        <img class="w-[32%] h-[165px]" src="@/assets/svg/login_shipin.png" />
        <img class="w-[32%] h-[165px]" src="@/assets/svg/login_shipin.png" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  background: #1a1c1d;
  border-radius: 16px 16px 0 0;
  //position: relative;
  //z-index: 20;
  //top: -20px;
  height: 900px;
  overflow-y: auto;
}

.btn {
  background-image: linear-gradient(92deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
  width: 84px;
  height: 36px;
}

.borderBottom {
  padding-bottom: 20px;
  border-bottom: 1px solid #2e3136;
}

.bg {
  opacity: 0.47;
  background-image: linear-gradient(180deg, rgba(115, 96, 65, 0) 0%, #a0805d 98%);
  border-radius: 8px;
}

.line {
  transform: scaleX(-1);
  background-image: linear-gradient(90deg, #918b87 0%, rgba(89, 87, 85, 0) 100%);
}

.label {
  font-size: 14px;
  color: #918b87;
  letter-spacing: 0;
  font-weight: 400;
}

.value {
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 400;
}

.bottomBg {
  background: url('@/assets/svg/zhuye_jiaoyou_zuji.png') no-repeat;
  background-size: cover;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 400;
}

.yuyue {
  background: #37322b;
  border-radius: 20px;
  height: 40px;
  width: 161px;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
}
</style>
