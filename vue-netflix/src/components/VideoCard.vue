<template>
  <div class="card" @click="goToDetail">
    <img :src="thumbnailUrl" :alt="movie.title" />
    <p>{{ movie.title }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['movie']);
const router = useRouter();

const thumbnailUrl = computed(() => `/cdn/thumbs/${props.movie.id}.jpg`);

const goToDetail = () => {
  router.push(`/movie/${props.movie.id}`);
};
</script>

<style scoped>
.card {
  width: 200px;
  flex-shrink: 0;
  cursor: pointer;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
.card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
}
.card p {
  color: #fff;
  font-size: 0.9rem;
  margin-top: 0.3rem;
}
</style>
