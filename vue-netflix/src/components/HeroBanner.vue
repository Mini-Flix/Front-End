<template>
  <div>
    <!-- Hero 배너 -->
    <div class="hero" :style="backgroundImage">
      <div class="overlay">
        <h1 class="title">{{ movie.title }}</h1>
        <p class="description">{{ movie.description }}</p>
        <div class="buttons">
          <button class="play" @click="goToDetail">▶ 재생</button>
          <button class="info">ℹ 상세정보</button>
        </div>
      </div>
    </div>

    <!-- 영상 카드 리스트 -->
    <div class="row">
      <div class="card-container">
        <VideoCard
          v-for="item in movies"
          :key="item.id"
          :movie="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import VideoCard from './VideoCard.vue';

const props = defineProps({
  movie: Object,
  movies: Array,
});

const router = useRouter();

const backgroundImage = computed(() => {
  return `background-image: url('/cdn/thumbs/${props.movie.id}.jpg')`;
});

const goToDetail = () => {
  router.push(`/movie/${props.movie.id}`);
};
</script>

<style scoped>
/* Hero 배너 */
.hero {
  position: relative;
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

/* 하단 그라데이션 */
.hero::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #141414 100%);
  pointer-events: none;
  z-index: 1;
}

.overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 3rem 4rem;
}

.title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  max-width: 50%;
  margin-bottom: 1.2rem;
  line-height: 1.5;
}

.buttons {
  display: flex;
  gap: 1rem;
}
.buttons button {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  color: black;
  font-weight: bold;
  padding: 0.6rem 1.4rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.buttons .info {
  background: rgba(109, 109, 110, 0.7);
  color: white;
}
.buttons button:hover {
  background: white;
}

/* 카드 리스트 */
.row {
  position: relative;
  z-index: 3;
  margin-top: -60px;
  padding: 1rem 2rem;
  overflow-x: auto;
}

.card-container {
  display: flex;
  gap: 1rem;
}
</style>
