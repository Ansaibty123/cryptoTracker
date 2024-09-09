<template>
  <div class="Trending">
    <div class="title">Trending</div>
    <div class="coin-list">
      <CoinCard v-for="coin in TrendingCoins" :key="coin.item.id" :coin="coin" class="coin-card" />
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import CoinCard from './CoinCard.vue';
export default {
  name: 'Trending',
  components: { CoinCard },
  data() {
    return {
      TrendingCoins: [],
    }
  },
  methods: {
    async fetchTrendingCoins() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        this.TrendingCoins = response.data.coins.slice(6, 11);
        // console.log(response)

      } catch (error) {
        console.log("Trending coins:", error);
      }
    },
  },

  mounted() {
    this.fetchTrendingCoins();
  }
}
</script>

<style scoped>
.Trending{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title {

  font-family: Inter;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #202020;

}

.coin-list {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  padding-bottom: 30px;

}

.coin-card {
  height: 160px;
  width: 252px;
}


</style>
