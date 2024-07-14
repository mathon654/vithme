<template>
  <div class="GiftDialog" @click.stop="onCancel">
    <div class="content">
      <div class="item" :key="i" v-for="(item, i) in list" @click.stop="onOk(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" generic="T">
import { ref } from 'vue'

defineOptions({ name: 'GiftDialog' })

interface Item {
  name: string
}

const props = defineProps<{
  list: Item[]
  hidden: () => void
}>()
const loading = ref(true)

const onOk = (item: Item) => {
  console.log('onOk')
  props.hidden()
}

const onCancel = () => {
  if (loading.value) {
    loading.value = false
    return
  }
  console.log('onCancel')
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
  background: #000000bb;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    background: white;
    width: 80%;
    padding: 5rem 0;
    border-radius: 2px;
    box-sizing: border-box;

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
