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
import Performance from '@/components/Performance.vue';
</script>


<template>
  <Navbar />
  <div class="Flex">
    <div class="coin-view">
      <BitcoinPrice />
    </div>
    <div class="poster">
      <Poster />
    </div>
  </div>
  <SecondNav />
<Performance/>
  <Sentiments />
  <About />
  <Tokenomics class="tokenomics"/>
  <Team />
  <div class="footer">
    <Recommendations />
    <TrendingCoins />
  </div>


</template>
<style scoped>
.Flex {
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
  margin-left: 70px;
  margin-bottom: 25px;
  gap: 65px;
  width: 881px;
  border-radius: 8px;
  opacity: 0px;

}

.coin-view {
  background-color: white;

}

.footer {
  background-color: white;
}
@media(max-width:576px){
  .poster{
    display: none;
  }
  .Flex{
    margin: 0px 10px 0px 10px;
  }
  .tokenomics{
    display: none;
  }
}

</style>