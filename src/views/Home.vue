<script setup>
import Navbar from '../components/Navbar.vue';
import BitcoinPrice from '@/components/BitcoinPrice.vue';
import Recommendations from '@/components/Recommendations.vue';
import TrendingCoins from '@/components/TrendingCoins.vue';
import Poster from '@/components/Poster.vue';
</script>


<template>
  <Navbar />
  <div class="Flex">
    <BitcoinPrice />
    <Poster/>
  </div>
  <Recommendations />
  <TrendingCoins />
</template>
<style scoped>
.Flex{
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>