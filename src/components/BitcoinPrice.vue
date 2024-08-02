<template>
  <div class="container">
    <h2>Bitcoin BTC</h2>

    <div class="price-container">
      <div class="dollar">$ {{ priceUSD }}</div>

      <div class="rupees">₹ {{ priceINR }}</div>
    </div>
    <div ref="tradingviewWidget" class="tradingview-widget-container"
      style="width: 837px; height: 460px; margin-left: 70px;">
      <div class="tradingview-widget-container__widget" style="height:460px; width:100%"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
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
    };
  },
  methods: {
    async fetchBitcoinPrice() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'bitcoin',
              vs_currencies: 'usd,inr',
              include_24hr_change: 'true'
            }
          }
        );
        console.log(response)
        this.priceUSD = response.data.bitcoin.usd;
        this.priceINR = response.data.bitcoin.inr;
        this.change24h = response.data.bitcoin.usd_24h_change;
      } catch (error) {
        console.error("There was an error fetching the Bitcoin price:", error);
      }
    },
    loadTradingViewWidget() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": false,
        "width": 837,
        "height": 460,
        "symbol": "BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
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
  margin-left: 70px;
}

.container {
  width: 877px;
  height: 654px;
  top: 24px;
  left: 24px;
  gap: 40px;
  opacity: 0px;
  margin-left: 70px;

}

.price-container {
  width: 161px;
  height: 66px;
  gap: 0px;
  opacity: 0px;

}

.dollar {
  width: 161px;
  height: 39px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  line-height: 38.4px;
  text-align: left;
  color: #0B1426;
}

.rupees {
  width: 94px;
  height: 27px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
  color: #0B1426;
}
</style>