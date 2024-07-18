<script lang="ts" setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import home from '@/assets/svg/home_liwu_1.png'
import home1 from '@/assets/svg/home_liwu_3.png'
import home2 from '@/assets/svg/home_liwu_4.png'
import 'swiper/css'

const templateOptions = ref([{ templateImage: home1 }, { templateImage: home2 }])
</script>

<template>
  <div class="center relative">
    <div class="w-[100%]">
      <swiper
        :centered-slides="true"
        :loop="false"
        :slideToClickedSlide="true"
        :slides-per-view="3"
        :space-between="1"
        :speed="230"
        class="swiper"
      >
        <swiper-slide style="width: 150px">
          <img :src="home" style="width: 80px; height: 80px" />
        </swiper-slide>
        <swiper-slide v-for="item in templateOptions" :key="item.templateImage">
          <img :src="item.templateImage" style="width: 80px; height: 80px" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="less" scoped>
.center {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  background-image: linear-gradient(180deg, #5f5d5c 0%, #41403f 97%);
  box-shadow: inset 0 0 4px 0 rgba(206, 200, 200, 0.5);
  border-radius: 20px;
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
</style>
