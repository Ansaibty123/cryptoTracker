<template>
  <div class="recommendations">
    <div class="title">You may also like</div>
    <div class="coin-list">
      <CoinCard v-for="coin in recommendCoins" :key="coin.item.id" :coin="coin" class="coin-card"/>
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
.recommendations{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
 
  font-family: Inter, sans-serif;
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
  gap: 10px;

}
.coin-card {
  height: 160px;
  width: 252px;
}
@media(max-width:768px){
  .coin-list{
    gap: 6px;
  }
}

</style>
