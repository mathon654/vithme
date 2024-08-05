<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getCountry } from '@/api/user'
import { Button } from 'vant'
import { IndexBar, IndexAnchor } from 'vant'
const router = useRouter()
import countryList from '@/utils/countryList'
const indexList = ref([])
const commonShortName = ['KH', 'CN', 'TH', 'LA', 'MM', 'SG']
const props = defineProps({
  backMode: {
    type: String,
    default: 'gray'
  },
  backImg: {
    type: String,
    default: 'back'
  },
  isClose: {
    type: Boolean,
    default: false
  },
  isFixed: {
    type: Boolean,
    default: true
  }
})
const goRegister = () => {
  router.push('/register')
}
const searchValue = ref('')

const getCodeList = () => {
  console.log('getCodeList')
  getCountry().then((res) => {
    console.log('res', res)
  })
}
//自定义索引栏
const indexArr = [
  '#',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
const buildShowList = () => {
  const __list = searchValue.value
    ? countryList.filter((item) => Object.values(item).some((v) => v.includes(searchValue.value)))
    : countryList
  const _list = __list.sort((a, b) => (a.enName + '').localeCompare(b.enName + ''))
  const obj = {}
  _list.forEach((item) => {
    if (obj[item.enName[0]]) {
      obj[item.enName[0]].push(item)
    } else {
      obj[item.enName[0]] = [item]
    }
  })
  indexList.value = Object.keys(obj).map((item) => {
    return { initial: item, items: obj[item] }
  })
  indexList.value.unshift({
    initial: '#',
    items: __list.filter((item) => commonShortName.includes(item.shortName))
  })
}
const onHandle = (data) => {
  router.replace({ path: '/login', query: { mobileArea: data.mobileArea } })
}

onMounted(() => {
  buildShowList()
})
</script>
<template>
  <div class="country_page">
    <BaseHeader>
      <template v-slot:center>
        <span class="f16">国家</span>
      </template>
    </BaseHeader>
    <IndexBar
      :sticky="false"
      highlight-color="#ce1d0e"
      v-if="indexList.length"
      :index-list="indexArr"
    >
      <template v-for="item in indexList" :key="item.enName">
        <IndexAnchor class="text-white px-[20rem]" :index="item.initial" />
        <div v-for="it in item.items" :key="it.enName" class="mb-[16px] flex" @click="onHandle(it)">
          <div class="flex justify-between w-full px-[30rem] py-[5px]">
            <p class="text-[#fff] text-[14px] font-[500] leading-[22px]">
              {{ it.zhName }}（+{{ it.mobileArea }}）
            </p>
            <p class="text-[#fff] text-[12px] font-[400] leading-[20px]">
              {{ it.enName }}
            </p>
          </div>
        </div>
      </template>
    </IndexBar>
  </div>
</template>
<style lang="less" scoped>
.country_page {
  overflow: scroll;
  height: 100%;
  padding-top: 50px;
  :deep(.van-action-sheet__content) {
    display: flex;
    flex-direction: column;
  }
  :deep(.van-index-bar__sidebar) {
    top: unset;
    bottom: 180px;
    transform: translateY(0);
  }
  :deep(.van-index-bar__index) {
    color: #fff;
    line-height: 1.3;
  }
  :deep(.van-index-anchor) {
    color: #fff;
    padding: 0;
  }
}
</style>
