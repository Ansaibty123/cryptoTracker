<template>
  <div class="Trending">
    <div class="title">Trending</div>
    <div class="Flex">
      <div v-for="coin in TrendingCoins" :key="coin.item.id">
        <div class="items">
          <div class="Flex coin-box">
            <img :src="coin.item.thumb" alt="coin logo" class="coin-logo" />
            <span>{{ coin.item.name }} ({{ coin.item.symbol }})</span>
          </div>
          <p class="price"> ${{ coin.item.data.price.toFixed(6) }} </p>
          <div class="graph-container">
            <div :ref="'tradingWidget' + coin.item.id" class="tradingview-widget-container"
              style="height:65px;width:218px">
              <div class="tradingview-widget-container__widget" style="height:60px;width:100%">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Trending',
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
        this.$nextTick(() => {
          this.TrendingCoins.forEach((coin) => {
            this.loadTradingViewWidget1(coin.item.symbol, coin.item.id);
          });
        });
      } catch (error) {
        console.log("Trending coins:", error);
      }
    },
    loadTradingViewWidget1(symbol, id) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": false,
        "width": 218,
        "height": 65,
        "symbol": `${symbol.toUpperCase()}USD`,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      });
      this.$refs[`tradingWidget${id}`][0].appendChild(script);

    }
  },
  mounted() {
    this.fetchTrendingCoins();
  }
}
</script>

<style scoped>
.Flex {
  display: flex;
  gap: 10px;
}

.coin-logo {
  width: 26px;
  height: 26px;
  border-radius: 13px;
}

.coin-box {
  width: 218px;
  height: 38px;
  /* border: 1px solid red; */
  box-sizing: border-box;
}

.price {
  box-sizing: border-box;
  width: 218px;
  height: 24px;
  /* border: 1px solid red; */
  margin: 0;
}

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
  border: 1px solid black;
  box-sizing: border-box;
  padding: 17px;
}

.graph-container {
  width: 218px;
  height: 65px;
  box-sizing: border-box;
  /* border: 1px solid black; */
}
</style>
