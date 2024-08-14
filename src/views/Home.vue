<script setup>
import Navbar from '../components/Navbar.vue';
import BitcoinPrice from '@/components/BitcoinPrice.vue';
import Recommendations from '@/components/Recommendations.vue';
import TrendingCoins from '@/components/TrendingCoins.vue';
import Poster from '@/components/Poster.vue';
import Sentiments from '@/components/Sentiments.vue';
import About from '@/components/About.vue';
import Tokenomics from '@/components/Tokenomics.vue';
import Team from '@/components/Team.vue';
import SecondNav from '@/components/SecondNav.vue';
</script>


<template>
  <Navbar/>
  <div class="Flex">
    <BitcoinPrice />
    <Poster/>
  </div>
  <SecondNav/>
  <Sentiments/>
  <About/>
  <Tokenomics/>
  <Team/>
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