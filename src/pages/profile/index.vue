<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import MobileSelect from '@/components/mobile-select/mobile-select'
import { _hideLoading, _showLoading, _showSelectDialog, _sleep } from '@/utils'
import { useRouter } from 'vue-router'

const router = useRouter()

const userName = ref()
const birthday = ref('请选择您的性别（选择后无法修改）')

const data = reactive({
  sexList: [
    { id: 1, name: '男' },
    { id: 2, name: '女' },
    { id: 3, name: '不展示' }
  ],
  avatarList: [
    { id: 1, name: '拍一张' },
    { id: 2, name: '从相册选择' },
    { id: 3, name: '查看大图' },
    { id: 4, name: '取消' }
  ],
  previewImg: ''
})
const sexValue = ref()
const sex = computed(() => {
  switch (Number(sexValue.value)) {
    case 1:
      return '男'
    case 2:
      return '女'
    default:
      return '请选择您的生日'
  }
})

function showSexDialog() {
  _showSelectDialog(data.sexList, async (e) => {
    _showLoading()
    await _sleep(500)
    console.log(e, 'eeee')
    sexValue.value = e.id
    _hideLoading()
  })
}

function showBirthdayDialog() {
  new MobileSelect({
    trigger: '#trigger1',
    title: '生日',
    connector: '生日',
    wheels: [
      {
        data: Array.apply(null, { length: 100 }).map((v, i) => new Date().getFullYear() - i)
      },
      {
        data: Array.apply(null, { length: 12 }).map((v, i) => 12 - i)
      },
      {
        data: Array.apply(null, { length: 31 }).map((v, i) => 31 - i)
      }
    ],
    callback: async (indexArr, data) => {
      _showLoading()
      await _sleep(500)
      birthday.value = data.join('-')
      _hideLoading()
    }
  }).show()
}

const goStep = () => {
  router.push('/getInvitationCode')
}
</script>

<template>
  <div>
    <div class="flexStyle">
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi1.png" />
      <div class="label">只差1步，完善资料</div>
      <img class="imgWidth" src="@/assets/svg/login_zhuangshi2.png" />
    </div>
    <div class="userName" style="margin-top: 55px">
      <input
        v-model="userName"
        placeholder="  请输入您的姓名或昵称"
        style="
          background: rgba(255, 255, 255, 0);
          width: 100%;
          height: 39px;
          color: #57595c;
          border: none;
        "
        type="text"
      />
    </div>
    <div class="userName" style="margin-top: 10px" @click="showSexDialog">
      <div
        style="
          background: rgba(255, 255, 255, 0);
          width: 100%;
          height: 39px;
          color: #57595c;
          border: none;
          display: flex;
          align-items: center;
        "
      >
        &nbsp;&nbsp;{{ sex }}
      </div>
      <dy-back :showIcon="false" direction="right" scale=".8"></dy-back>
    </div>
    <div class="userName" style="margin-top: 10px" @click="showBirthdayDialog">
      <span
        style="
          background: rgba(255, 255, 255, 0);
          width: 100%;
          height: 39px;
          color: #57595c;
          border: none;
          display: flex;
          align-items: center;
        "
        >&nbsp;&nbsp;{{ birthday }}</span
      >
      <div v-show="false" id="trigger1"></div>
      <dy-back :showIcon="false" direction="right" scale=".8"></dy-back>
    </div>
    <div class="nextStep" @click="goStep">下一步</div>
  </div>
</template>

<style lang="less" scoped>
.flexStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 61px;
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
  height: 30px;
}

.userName {
  border: 1px solid #918b87;
  border-radius: 6px;
  height: 44px;
  margin-left: 30px;
  margin-right: 30px;
}

.nextStep {
  height: 44px;
  line-height: 44px;
  text-align: center;
  margin-top: 30px;
  background-image: linear-gradient(90deg, #f9ecd4 0%, #d5985e 99%);
  border-radius: 6px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>
