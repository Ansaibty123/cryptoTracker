<template>
  <div class="container">
    <div>
      <span>
        <img :src="coinImg" alt="">
      </span>
      {{ CoinSymbol }}
    </div>
    <span class="rank">Rank: {{ rank }}</span>

    <div class="price-container">
      <div class="dollar">$ {{ priceUSD }}</div>
      <span class="percentage-change">{{ percentageChange }}%</span>
      <div class="rupees">₹ {{ priceINR }}</div>
    </div>
    <div>
      <div ref="tradingviewWidget" class="tradingview-widget-container" style="width: 837px; height: 460px;">
        <div class="tradingview-widget-container__widget" style="height:460px; width:100%"></div>
        <div class="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      priceUSD: null,
      priceINR: null,
      percentageChange: null,
      rank: null,
      CoinSymbol: null,
      coinImg: null,
    };
  },
  methods: {
    async fetchBitcoinPrice() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
        console.log(response);
        this.CoinSymbol = response.data.Symbol;
        this.coinImg = response.data.image.thumb;
        this.priceUSD = response.data.market_data.current_price.usd;
        this.priceINR = response.data.priceINR;
        this.percentageChange = response.data.percentageChange;
        this.rank = response.data.rank;
      } catch (error) {
        console.error('Error fetching the Bitcoin price:', error);
      }
    },
    loadTradingViewWidget() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: false,
        width: 837,
        height: 460,
        symbol: 'BTCUSD',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        hide_top_toolbar: true,
        hide_legend: true,
        allow_symbol_change: false,
        save_image: false,
        calendar: false,
        hide_volume: true,
        support_host: 'https://www.tradingview.com'
      });
      this.$refs.tradingviewWidget.appendChild(script);
    }
  },
  mounted() {
    this.fetchBitcoinPrice();
    this.loadTradingViewWidget();
  }
};
</script>

<style scoped>
.tradingview-widget-container {
  width: 837px;
  height: 515px;
}

.container {
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  width: 881px; 
  height: 760px; 
  gap: 20px;
  opacity: 1; 
}

.rank {
  font-size: 16px;
  color: #0B1426;
}

.price-container {
  display: flex;
  flex-direction: column;
  gap: 5px; 
  opacity: 1; 
}

.dollar, .rupees, .percentage-change {
  opacity: 1; 
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 38.4px;
  text-align: left;
  color: #0B1426;
}

.rupees {
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
}

.percentage-change {
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  color: #0B1426;
}
</style>
