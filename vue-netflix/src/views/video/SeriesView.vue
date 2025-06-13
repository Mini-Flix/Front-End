<template>
  <div class="page-wrapper">
    <HeroBanner :movie="featuredSeries" />
    <div class="content-wrapper">
      <h2>인기 시리즈</h2>
      <HorizontalRow :movies="popularSeries" />

      <h2>최신 시리즈</h2>
      <HorizontalRow :movies="newSeries" />

      <h2>추천 시리즈</h2>
      <HorizontalRow :movies="recommendedSeries" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HeroBanner from '../../components/HeroBanner.vue';
import HorizontalRow from '../../components/HorizontalRow.vue';
import { getAllSeries } from '../../api/main'; // 추후 API 연동 시 사용
import { mockSeries } from '../../mock/mockSeries'; // 목데이터

const featuredSeries = ref({});
const popularSeries = ref([]);
const newSeries = ref([]);
const recommendedSeries = ref([]);

onMounted(async () => {
  try {
    // const response = await getAllSeries();
    // const series = response.data;
    const series = mockSeries;

    featuredSeries.value = series[0];
    popularSeries.value = series.slice(1, 5);
    newSeries.value = series.slice(5, 9);
    recommendedSeries.value = series.slice(9, 13);
  } catch (error) {
    console.error('시리즈 데이터를 불러오는 데 실패했습니다:', error);
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
