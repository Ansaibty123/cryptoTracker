<template>
  <div class="recommendations">
    <div class="title">You may also like</div>
    <div class="coin-list">
      <CoinCard v-for="coin in recommendCoins" :key="coin.item.id" :coin="coin" />
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import CoinCard from './CoinCard.vue';
export default {
  name: 'Recommendations',
  components: {
    CoinCard
  },
  data() {
    return {
      recommendCoins: [],
    }
  },
  methods: {
    async fetchRecommendCoins() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        this.recommendCoins = response.data.coins.slice(0, 5);

      } catch (error) {
        console.log("recommend coins:", error);
      }
    }
  },

  mounted() {
    this.fetchRecommendCoins();
  }
}
</script>

<style scoped>
.recommendations {
  /* border: 1px solid black; */
  margin-top: 20px;
  margin-right: 70px;
  margin-left: 70px;
  width: 1300px;
  height: 246px;
}

.title {
  width: 210px;
  height: 36px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #202020;
}
.coin-list {
  display: flex;
  gap: 10px;
}
</style>
