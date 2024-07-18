<template>
  <div class="GiftDialog">
    <div class="content">
      <div class="pop-title">给TA打赏</div>
      <div class="flex h-[230rem] w-[100%]">
        <swiper
          :centered-slides="true"
          :loop="false"
          :slideToClickedSlide="true"
          :slides-per-view="3"
          :space-between="1"
          :speed="230"
          class="swiper"
        >
          <swiper-slide v-for="item in templateOptions" :key="item.templateImage">
            <div class="flex w-[100px] items-center justify-center">
              <img :src="item.templateImage" style="width: 80px; height: 80px" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="pop-btn" @click="onOk">打赏</div>
      <div class="text-white mt-[12rem] text-[14rem]">您当前金币余额:9999</div>
    </div>
    <div class="mt-[20rem]" @click="onCancel">
      <img width="40rem" height="40rem" src="@/assets/img/home/home_pop_close.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts" generic="T">
import { ref } from 'vue'
import 'swiper/css'
import home from '@/assets/svg/home_liwu_1.png'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import home1 from '@/assets/svg/home_liwu_3.png'
import home2 from '@/assets/svg/home_liwu_4.png'
defineOptions({ name: 'GiftDialog' })

interface Item {
  name: string
}

const props = defineProps<{
  list: Item[]
  hidden: () => void
}>()
const templateOptions = ref([
  { templateImage: home },
  { templateImage: home1 },
  { templateImage: home2 }
])

const onOk = () => {
  console.log('onOk')
  props.hidden()
}
// const activeIndex = ref(0)

// const slideChange = (e)=>{
//   activeIndex.value = e.realIndex
// }

const onCancel = () => {
  props.hidden()
}
</script>
<style scoped lang="less">
.GiftDialog {
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content {
    width: 300rem;
    height: 379rem;
    border-radius: 2px;
    background-image: url('../../../assets/img/home/home_pop_bg.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pop-title {
      background-image: url('../../../assets/img/home/home_pop_bt.png');
      background-size: 100% 100%;
      width: 176rem;
      height: 40rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16rem;
      color: #fff;
    }
    .swiper {
      width: 100%;
      height: 100%;

      :deep(.swiper-wrapper) {
        display: flex;
        align-items: center;

        .swiper-slide {
          border-radius: 12px;
          transform: scale(0.9);

          display: flex;
          flex-direction: column;
          height: auto;

          img {
            height: 340px;
            border-radius: 12px;
          }

          p {
            margin: 16px 0;
          }
        }

        .swiper-slide-active {
          //background-color: #fff;
          padding: 16px 0px 0;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transform: scale(1);
          transition: 0.1s;
        }
      }
    }
    .pop-btn {
      background-image: url('../../../assets/img/home/home_pop_btn.png');
      background-size: 100% 100%;
      width: 138rem;
      height: 40rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16rem;
      color: #3f2c10;
    }

    .item {
      font-size: 15rem;
      padding: 15rem 20rem;
      transition: all 0.2s;

      &:active {
        background: darkgray;
      }
    }
  }
}
</style>
