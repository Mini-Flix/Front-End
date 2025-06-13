<template>
  <div class="page-wrapper">
    <HeroBanner :movie="featuredMovie" />
    <div class="content-wrapper">
      <h2>인기 영화</h2>
      <HorizontalRow :movies="popularMovies" />

      <h2>최신 영화</h2>
      <HorizontalRow :movies="newMovies" />

      <h2>추천 영화</h2>
      <HorizontalRow :movies="recommendedMovies" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroBanner from '../../components/HeroBanner.vue';
import HorizontalRow from '../../components/HorizontalRow.vue';
import { getAllMovies } from '../../api/main'; // 추후 API 연동 시 사용
import { mockMovies } from '../../mock/mockMovies'; // 목데이터

const featuredMovie = ref({});
const popularMovies = ref([]);
const newMovies = ref([]);
const recommendedMovies = ref([]);

onMounted(async () => {
  try {
    // const response = await getAllMovies(); // ← 실제 API 연결 시 사용
    // const movies = response.data;
    const movies = mockMovies; // ← 현재는 목데이터 사용

    featuredMovie.value = movies[0];
    popularMovies.value = movies.slice(1, 5);
    newMovies.value = movies.slice(5, 9);
    recommendedMovies.value = movies.slice(9, 13);
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
}
</style>
