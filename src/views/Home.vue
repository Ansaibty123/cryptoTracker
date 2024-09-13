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


  <div id="main-section">
    <div id="main-left">
      <BitcoinPrice />
      <SecondNav class="second-nav" />
      <Performance id="performance-section" />
      <Sentiments id="sentiments-section" />
      <About id="about-section" />
      <Tokenomics class="tokenomics" id="tokenomics-section" />
      <Team id="team-section" />
      <!-- <div class="card">
        <Recommendations />
      </div> -->

    </div>

    <div id="main-right">
      <Poster />
    </div>
  </div>
  <div class="footer" id="footer-section">
    <Recommendations />
    <TrendingCoins />
  </div>

</template>

<style scoped>
body {
  padding: 0;
  margin: 0;
}

.footer {
  background-color: white;
  padding: 69px;
}


#main-section {
  padding: 17px 56px 56px 56px;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

#main-left {
  flex: 8;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

#main-right {
  flex: 4;
  padding-top: 36px;
}

@media(max-width:992px) {
  #main-section {
    padding: 14px;
    flex-direction: column;
  }

  #main-right {
    padding-top: 0;
  }

  .footer {
    overflow-x: auto;
    padding: 14px;
    margin-bottom: 30px;
  }
}
</style>