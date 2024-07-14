<script setup lang="ts">
import BaseMusic from '../BaseMusic.vue'
import { _formatNumber, cloneDeep } from '@/utils'
import bus, { EVENT_KEY } from '@/utils/bus'
import { Icon } from '@iconify/vue'
import { useClick } from '@/utils/hooks/useClick'
import { inject } from 'vue'

const props = defineProps({
  isMy: {
    type: Boolean,
    default: () => {
      return false
    }
  },
  item: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const position = inject<any>('position')

const emit = defineEmits(['update:item', 'goUserInfo', 'showComments', 'showShare', 'goMusic'])

function _updateItem(props, key, val) {
  const old = cloneDeep(props.item)
  old[key] = val
  emit('update:item', old)
  bus.emit(EVENT_KEY.UPDATE_ITEM, { position: position.value, item: old })
}

function loved() {
  _updateItem(props, 'isLoved', !props.item.isLoved)
}

function attention(e) {
  e.currentTarget.classList.add('attention')
  setTimeout(() => {
    _updateItem(props, 'isAttention', true)
  }, 1000)
}

function showComments() {
  bus.emit(EVENT_KEY.OPEN_COMMENTS, props.item.aweme_id)
}
function showGift() {
  console.log('showGift')
  bus.emit(EVENT_KEY.SHOW_GIFT, props.item.aweme_id)
}

const vClick = useClick()
</script>

<template>
  <div class="toolbar mb1r">
    <div class="avatar-ctn mb2r">
      <img
        class="avatar"
        :src="item.author.avatar_168x168.url_list[0]"
        alt=""
        v-click="() => bus.emit(EVENT_KEY.GO_USERINFO)"
      />
      <transition name="fade">
        <div v-if="!item.isAttention" v-click="attention" class="options">
          <img class="no" src="../../assets/img/icon/add-light.png" alt="" />
          <img class="yes" src="../../assets/img/icon/ok-red.png" alt="" />
        </div>
      </transition>
    </div>
    <div class="flex flex-col" v-click="loved">
      <img src="../../assets/img/home/home_love_n.png" class="love-image" v-if="!item.isLoved" />
      <img src="../../assets/img/home/home_love_p.png" class="love-image" v-if="item.isLoved" />
      <span>{{ _formatNumber(item.statistics.digg_count) }}</span>
    </div>
    <!--    礼物-->
    <div class="message" v-click="showGift">
      <img src="../../assets/img/home/home_liwu.png" class="icon" alt="" />
      <span>{{ _formatNumber(item.statistics.comment_count) }}</span>
    </div>
    <!--    评论-->

    <div class="message" v-click="showComments">
      <img src="../../assets/img/home/home_pinglun.png" class="icon" alt="" />
      <span>{{ _formatNumber(item.statistics.comment_count) }}</span>
    </div>

    <div v-if="!props.isMy" class="share" v-click="() => bus.emit(EVENT_KEY.SHOW_SHARE)">
      <img src="../../assets/img/home/home_fenxiang.png" alt="" class="icon" />
      <span>{{ _formatNumber(item.statistics.share_count) }}</span>
    </div>
    <div v-else class="share mb2r" v-click="() => bus.emit(EVENT_KEY.SHOW_SHARE)">
      <img src="../../assets/img/icon/menu-white.png" alt="" class="icon" />
    </div>
    <!--    <BaseMusic-->
    <!--        :cover="item.music.cover"-->
    <!--        v-click="$router.push('/home/music')"-->
    <!--    /> -->
    <BaseMusic />
  </div>
</template>

<style scoped lang="less">
.toolbar {
  //width: 40px;
  position: absolute;
  bottom: 120rem;
  right: 10rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar-ctn {
    position: relative;

    @w: 45rem;

    .avatar {
      width: @w;
      height: @w;
      border: 3rem solid white;
      border-radius: 50%;
    }

    .options {
      position: absolute;
      border-radius: 50%;
      margin: auto;
      left: 0;
      right: 0;
      bottom: -5px;
      background: red;
      //background: black;
      width: 18rem;
      height: 18rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1s;

      img {
        position: absolute;
        width: 14rem;
        height: 14rem;
        transition: all 1s;
      }

      .yes {
        opacity: 0;
        transform: rotate(-180deg);
      }

      &.attention {
        background: white;

        .no {
          opacity: 0;
          transform: rotate(180deg);
        }

        .yes {
          opacity: 1;
          transform: rotate(0deg);
        }
      }
    }
  }

  .love-image {
    width: 28rem;
    height: 28rem;
  }
  .message {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 10rem;
    margin-top: 5rem;
  }

  .share {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
    margin-top: 0;
  }

  .icon {
    width: 30rem;
    height: 30rem;
    margin-top: 10rem;
  }

  .loved {
    background: red;
  }
}
</style>
