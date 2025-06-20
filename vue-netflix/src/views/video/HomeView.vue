<template>
  <div class="page-wrapper">
    <HeroBanner :movie="featuredMovie" />

    <div class="content-wrapper">
      <h2>인기 콘텐츠</h2>
      <HorizontalRow :movies="popularMovies" />

      <h2>최신 업로드</h2>
      <HorizontalRow :movies="newMovies" />

      <h2>추천 영상</h2>
      <HorizontalRow :movies="recommendedMovies" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroBanner from '../../components/HeroBanner.vue';
import HorizontalRow from '../../components/HorizontalRow.vue';
import { mockMovies } from '../../mock/mockMovies.js';
import { getAllMovies } from '../../api/main';

const featuredMovie = ref({});
const popularMovies = ref([]);
const newMovies = ref([]);
const recommendedMovies = ref([]);

onMounted(async () => {
  try {
    const movies = await getAllMovies();

    featuredMovie.value = movies[0];
    popularMovies.value = movies.slice(1, 7);
    newMovies.value = movies.slice(4, 7);
    recommendedMovies.value = movies.slice(7);
  } catch (error) {
    console.error('영화 데이터를 불러오는 데 실패했습니다:', error);
  }
});
</script>


<style scoped>
.page-wrapper {
  margin: 0;
  padding: 0;
}

.content-wrapper {
  margin: 2rem 1rem;
}

h2 {
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
  color: white;
}
</style>