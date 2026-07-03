<template>
  <div :id="carouselId" class="carousel slide" data-bs-ride="carousel" ref="carouselRef">
    <div class="carousel-indicators" v-if="showIndicators && items.length > 1">
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        :data-bs-target="`#${carouselId}`"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-current="index === 0 ? 'true' : null"
      ></button>
    </div>
    
    <div class="carousel-inner">
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="item.image" class="d-block w-100" :alt="item.caption">
        <div class="carousel-caption d-none d-md-block" v-if="item.caption">
          <h5>{{ item.title }}</h5>
          <p>{{ item.caption }}</p>
        </div>
      </div>
    </div>
    
    <button 
      class="carousel-control-prev" 
      type="button" 
      :data-bs-target="`#${carouselId}`" 
      data-bs-slide="prev"
      v-if="items.length > 1"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    
    <button 
      class="carousel-control-next" 
      type="button" 
      :data-bs-target="`#${carouselId}`" 
      data-bs-slide="next"
      v-if="items.length > 1"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BootstrapCarousel',
  props: {
    carouselId: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  setup(props) {
    const carouselRef = ref(null)
    let bootstrapCarousel = null

    onMounted(() => {
      if (typeof window !== 'undefined' && window.bootstrap && carouselRef.value) {
        bootstrapCarousel = new window.bootstrap.Carousel(carouselRef.value, {
          interval: props.interval
        })
      }
    })

    onUnmounted(() => {
      if (bootstrapCarousel) {
        bootstrapCarousel.dispose()
      }
    })

    return {
      carouselRef
    }
  }
}
</script>

<style scoped>
</style>
