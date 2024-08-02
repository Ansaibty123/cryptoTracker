<template>
  <div class="recommendations">
    <div class="title">You may also like</div>
    <div class="Flex">
      <div v-for="coin in recommendCoins" :key="coin.item.id">
        <div class="items">
          <div class="Flex coin-box">
            <img :src="coin.item.thumb" alt="coin logo" class="coin-logo" />
            <span class="coin-name"> {{ coin.item.symbol }}</span>
          </div>
          <p class="price"> ${{ coin.item.data.price.toFixed(6) }} </p>
          <div class="graph-container">
            <img :src="coin.item.data.sparkline" alt="graph">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Recommendations',
  data() {
    return {
      recommendCoins: [],
      intervalId: null,  // To store the interval ID
    };
  },
  methods: {
    async fetchRecommendCoins() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        this.recommendCoins = response.data.coins.slice(0, 5);
      } catch (error) {
        console.log("recommend coins:", error);
      }
    },
    startPolling() {
      this.fetchRecommendCoins();  // Initial fetch
      this.intervalId = setInterval(this.fetchRecommendCoins, 1000); // Fetch every 60 seconds
    },
    stopPolling() {
      clearInterval(this.intervalId);  // Clear the interval
    },
  },
  mounted() {
    this.startPolling();  // Start polling when the component is mounted
  },
  beforeDestroy() {
    this.stopPolling();  // Stop polling when the component is destroyed
  },
};
</script>

<style scoped>
.Flex {
  display: flex;
  gap: 10px;
}

.coin-name {
  gap: 0px;
  opacity: 0px;
  padding: 1px 0px 0px 0px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: #202020;
}

.coin-logo {
  width: 26px;
  height: 26px;
  /* border-radius: 13px; */
}

.coin-box {
  width: 218px;
  height: 38px;
  /* border: 1px solid red; */
  box-sizing: border-box;
}

.price {
  box-sizing: border-box;
  width: 112px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  margin: 0;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #171717;
}

.coin-logo {
  width: 26px;
  height: 26px;
  border-radius: 13px;
}

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

.items {
  width: 252px;
  height: 160px;
  border-radius: 10px;
  border: 1px solid #E3E3E3;
  box-sizing: border-box;
  padding: 17px;
}

.graph-container {
  width: 218px;
  height: 65px;
  box-sizing: border-box;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
