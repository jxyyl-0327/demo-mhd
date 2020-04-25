<template>
  <div class="page-home">
    <!-- 首页头部 开始-->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>
      <div class="header-logo"></div>
      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 首页头部 结束 -->
    <hr />

    <Swiper class="my-swiper" @change="onChange" v-if="bannerList.length > 0">
      <SwiperItem v-for="item in bannerList" :key="item.id">
        <img :src="item.imageurl" alt />
      </SwiperItem>
    </Swiper>
  </div>
</template>
<script>
// import Swiper from '@/components/Swiper/Swiper.vue'
// import SwiperItem from '@/components/Swiper/SwiperItem.vue'
import { Swiper, SwiperItem } from '@/components/Swiper'
import { getBanner } from '@/api/cartoon'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      bannerList: []
    }
  },
  methods: {
    onChange (index) {
      console.log(index)
    }
  },
  created () {
    getBanner()
      .then(res => {
        // console.log(res)
        if (res.code === 200) {
          this.bannerList = res.info
        } else {
          alert(res.code_msg)
        }
      })
      .catch(err => {
        console.log(err)
        alert('网络异常，稍后重试')
      })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .index-header {
    @include border-bottom;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    box-sizing: border-box;

    .user-btn {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/user-btn.png") no-repeat;
      background-size: 100%;
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../assets/logo.png") no-repeat;
      background-size: 100%;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../assets/icon/search.png") no-repeat;
      background-size: 100%;
    }
  }
  .my-swiper img {
    width: 100%;
  }
}
</style>
