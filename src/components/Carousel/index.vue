<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in carouselList" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'  // 引入 swiper 样式

  export default {
    name: "Carousel",
    props: ['carouselList'],
    watch: {
      carouselList: {
        immediate: true,
        handler() {
          this.$nextTick(() => {
            const mySwiper = new Swiper (this.$refs.mySwiper, {
              autoplay: {
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              },
              // direction: 'vertical', // 垂直切换选项
              loop: true, // 循环模式选项              
              pagination: {  // 如果需要分页器
                el: '.swiper-pagination',
                clickable: true,
              },                      
              navigation: {  // 如果需要前进后退按钮
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },                      
              // scrollbar: {  // 如果需要滚动条
              //   el: '.swiper-scrollbar',
              // },
            })
            // 6.6.2之前的版本需要通过代码实现此功能
            mySwiper.el.onmouseover = function(){
              mySwiper.autoplay.stop()
            }
            mySwiper.el.onmouseout = function(){
              mySwiper.autoplay.start()
            }
          })
        }
      }
    }
  }
</script>
