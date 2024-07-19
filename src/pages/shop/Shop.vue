<template>
  <div id="Shop" style="background: black">
    <div class="wrapper">
      <div class="search justify-between">
        <div class="flex text-[#F8D4AC] text-[18px] font-semibold">
          <div
            v-for="(item, index) in checkList"
            :key="item.label"
            :style="{ marginLeft: index > 0 ? '40px' : '' }"
            class="relative"
            @click="handleCLick(item)"
          >
            <span>{{ item.label }}</span>
            <div
              v-if="item.checked"
              class="w-[16px] h-[2px] absolute bottom-[-2px] left-[25%]"
              style="border-bottom: 2px solid #f8d4ac"
            ></div>
          </div>
        </div>
        <div>
          <Icon icon="tabler:search" />
        </div>
        <!--        <div class="search-input">-->
        <!--          <Icon icon="tabler:search" />-->
        <!--          <div class="placeholder">50元话费充值</div>-->
        <!--          <Icon color="gray" icon="lucide:camera" />-->
        <!--          <div class="search-notice">搜索</div>-->
        <!--        </div>-->
        <!--        <div class="more">-->
        <!--          <Icon icon="ep:shopping-cart" />-->
        <!--        </div>-->
      </div>
    </div>
    <div v-if="checkList[0].checked">
      <swiper :pagination="{ clickable: true }">
        <swiper-slide v-for="item in templateOptions" :key="item.src">
          <img :src="item.src" class="h-[132px] w-full" />
        </swiper-slide>
      </swiper>
      <ScrollList :api="recommendedShop" class="Scroll">
        <template v-slot="{ list }">
          <div class="flex flex-wrap">
            <div
              v-for="(item, index) in list"
              :key="item.name"
              :class="`w-[48.7%] h-[225px]  mb-[5px] relative`"
              :style="{ marginLeft: index % 2 !== 0 ? '5px' : '' }"
            >
              <img v-lazy="_checkImgUrl('goods/' + item.cover)" class="w-full h-full" />
              <div class="absolute bottom-[12px] left-[13px]">
                <div
                  class="text-[#FFFFFF] text-[14px] font-medium w-[87px] text-ellipsis whitespace-nowrap overflow-hidden"
                >
                  Nancy Timassssss收拾收拾是
                </div>
                <div
                  class="text-[#B3A9A] text-[12px] font-normal w-[84px] text-ellipsis whitespace-nowrap overflow-hidden"
                >
                  模特，瑜伽教练
                </div>
              </div>
            </div>
          </div>
          <!--        <WaterfallList :list="list">-->
          <!--          <template v-slot="{ item }">-->
          <!--            <div class="goods" @click="nav('/shop/detail', {}, item)">-->
          <!--              <div class="item">-->
          <!--                <img v-lazy="_checkImgUrl('goods/' + item.cover)" class="poster" />-->
          <!--                <div class="bottom">-->
          <!--                  <div class="desc">-->
          <!--                    {{ item.name }}-->
          <!--                  </div>-->
          <!--                  <div v-if="item.discount" class="discounts">-->
          <!--                    {{ item.discount }}-->
          <!--                  </div>-->
          <!--                  <div class="info">-->
          <!--                    <div class="price">-->
          <!--                      ￥-->
          <!--                      <div class="big">{{ item.price }}</div>-->
          <!--                    </div>-->
          <!--                    <div class="num">已售{{ item.sold }}件</div>-->
          <!--                  </div>-->
          <!--                  <div v-if="item.isLowPrice" class="low">近30天低价</div>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </template>-->
          <!--        </WaterfallList>-->
        </template>
      </ScrollList>
    </div>
    <div
      v-if="checkList[1].checked"
      class="h-[752px] mt-[20px] relative"
      v-bind:style="{ 'background-image': 'url(' + imageUrl + ')' }"
    >
      <div class="absolute bottom-[10px]">
        <div class="text-[20px] text-[#FFFFFF] font-semibold pt-[419px] ml-[21px]">可爱的女人</div>
        <div class="text-[14px] text-[#FFFFFF] font-normal ml-[21px] mt-[4px]">
          车模、选美冠军、香港小姐
        </div>
        <div class="label">上海戏剧学院</div>
        <div class="flex mt-[22px]">
          <img class="w-[50px] h-[50px] ml-[16px]" src="@/assets/svg/new_shauxin.png" />
          <img class="w-[100px] h-[50px] ml-[9px]" src="@/assets/svg/new_shanchu.png" />
          <img class="w-[100px] h-[50px] ml-[9px]" src="@/assets/svg/new_xihuan.png" />
          <img class="w-[50px] h-[50px] ml-[9px]" src="@/assets/svg/new_liaotian.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { ref } from 'vue'

import 'swiper/css/navigation'
import { recommendedShop } from '@/api/user'
import ScrollList from '@/components/ScrollList.vue'
import { _checkImgUrl } from '@/utils'

defineOptions({
  name: 'Shop'
})

const templateOptions = ref([
  { src: 'https://cdn.pixabay.com/photo/2016/03/30/08/24/peacock-1290248_1280.jpg', title: '1' },
  { src: 'https://cdn.pixabay.com/photo/2024/05/18/19/21/plant-8770937_960_720.jpg', title: '1' }
])
const imageUrl = ref('https://cdn.pixabay.com/photo/2016/03/30/08/24/peacock-1290248_1280.jpg')
const checkList = ref([
  { label: '推荐', checked: true },
  { label: '新人', checked: false },
  { label: '在线', checked: false }
])

const handleCLick = (row) => {
  checkList.value = checkList.value.map((item) => {
    return {
      ...item,
      checked: item.label === row.label
    }
  })
}
</script>

<style lang="less" scoped>
@fColor: #f1f1f1;

#Shop {
  font-size: 14rem;
  position: relative;
  background: #f8f8f8;
  padding: 10rem;
  color: black;

  .wrapper {
  }

  .search {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    height: 36rem;
    box-sizing: border-box;
    margin-bottom: 10rem;

    svg {
      color: gray;
      font-size: 20rem;
    }

    .search-input {
      border: 2rem solid red;
      border-radius: 12rem;
      height: 100%;
      padding: 0 10rem;
      padding-right: 3rem;
      flex: 1;
      gap: 10rem;
      display: flex;
      align-items: center;

      .placeholder {
        flex: 1;
      }

      img {
        margin-right: 10rem;
      }

      .search-notice {
        background: rgb(242, 62, 92);
        padding: 0 10rem;
        height: 85%;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
    }

    .more {
      margin-left: 10rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-size: 12rem;
    }
  }

  .card {
    background: white;
    padding: 10rem 15rem;
    margin-bottom: 10rem;
    border-radius: 8rem;
  }

  .options {
    display: flex;
    overflow-x: auto;
    box-sizing: border-box;

    .option {
      width: 17vw;
      flex-shrink: 0;
      font-size: 13rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 30rem;
        margin-bottom: 3rem;
      }
    }
  }

  .baiyibutie {
    display: flex;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      font-size: 12rem;
      color: gray;

      img {
        width: 80%;
      }

      .price {
        color: red;
        font-size: 16rem;
        font-weight: bold;

        .m {
          font-size: 10rem;
        }
      }
    }
  }

  .Scroll {
    position: relative;
    z-index: 2;
    height: calc(var(--vh, 1vh) * 100 - var(--footer-height) * 2) !important;
  }

  .fixed {
    background: @fColor;
  }

  .top-card {
    margin-bottom: 10rem;
  }

  @p: 5rem;

  .goods {
    box-sizing: border-box;
    margin-bottom: 10rem;

    .item {
      border-radius: 8rem;
      //overflow: hidden;
      background: white;

      img {
        width: 100%;
      }

      .bottom {
        padding: 10rem;

        .desc {
          color: black;
          font-size: 16rem;
          margin-bottom: 8rem;
          @lh: 18rem;
          line-height: @lh;
          height: @lh * 2;
          overflow: hidden;
        }

        .discounts {
          display: inline-block;
          @c: rgb(199, 89, 106);
          border: 1rem solid @c;
          padding: 0 4rem;
          color: @c;
          font-size: 12rem;
          margin-bottom: 4rem;
        }

        .info {
          display: flex;
          align-items: flex-end;

          .price {
            color: rgb(248, 38, 74);
            display: flex;
            align-items: flex-end;
            font-size: 14rem;
            margin-right: 5rem;

            .big {
              font-size: 22rem;
              font-weight: bold;
              transform: translateY(2rem);
            }
          }

          .num {
            color: darkgray;
            font-size: 12rem;
          }
        }

        .low {
          margin-top: 2rem;
          color: rgb(230, 153, 92);
        }
      }
    }
  }
}

.label {
  border: 1px solid #cdc7c4;
  border-radius: 13px;
  margin-left: 21px;
  color: white;
  width: 104px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.tab-ctn {
  width: 100%;
  position: relative;

  .tabs {
    display: flex;
    gap: 20rem;

    .tab {
      transition: color 0.3s;
      color: rgba(white, 0.7);
      position: relative;
      font-size: 15rem;
      cursor: pointer;

      .tab1-img {
        position: absolute;
        @width: 12rem;
        width: @width;
        height: @width;
        margin-left: 4rem;
        transition: all 0.3s;
        // margin-top: 7rem;
      }

      .tab2-img {
        position: absolute;
        height: 15rem;
        left: 24rem;
        top: -5rem;
      }

      &.active {
        color: white;
      }
    }
  }

  .indicator {
    //transition: left .3s;
    position: absolute;
    bottom: -8rem;
    height: 2rem;
    width: 16rem;
    //width: calc(100% / 5);
    background: #fff;
    border-radius: 5rem;
  }
}
</style>
