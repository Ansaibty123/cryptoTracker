<template>
  <div class="Trending">
    <div class="title">Trending</div>
    <div class="coin-list">
      <CoinCard v-for="coin in TrendingCoins" :key="coin.item.id" :coin="coin" />
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import CoinCard from './CoinCard.vue';
export default {
  name: 'Trending',
  components: {CoinCard},
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
        console.log(response)

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
.Trending {
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
  font-family: Inter;
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
