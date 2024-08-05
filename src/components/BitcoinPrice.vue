<template>
  <div class="container">
    <div class="coin-container">
      <span>
        <img :src="coinImg" alt="coin logo" class="coin-logo">
      </span>
      <span class="coin-name">{{ coinName }}</span>
      <span class="coin-symbol">
        {{ CoinSymbol }}
      </span>
      <span class="rank"><span class="rank-sub">Rank # {{ rank }}</span></span>
    </div>

    <div class="price-container">
      <div class="price-box">
        <span class="dollar">$ {{ priceUSD }}</span>
        <span class="rupees">₹ {{ priceINR }}</span>
      </div>

      <span class="percentage-change">{{ percentageChange }}% (24H)</span>

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
import bitcoin from '@/assets/bitcoin.json'

export default {
  data() {
    return {
      coinName: null,
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
        // const response = bitcoin;
        console.log(response)
        this.coinName = response.data.name;
        this.CoinSymbol = response.data.symbol;

        this.coinImg = response.data.image.thumb;
        this.priceUSD = response.data.market_data.current_price.usd;
        this.priceINR = response.data.market_data.current_price.inr;
        this.percentageChange = response.market_data.market_cap_change_percentage_24h;
        this.rank = response.data.market_cap_rank;
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
.coin-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coin-logo {
  width: 36px;
  height: 36px;
  gap: 0px;
  opacity: 0px;

}

.coin-name {
  width: 81px;
  height: 29px;
  top: -1px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #0B1426;
}

.coin-symbol {
  width: 33px;
  height: 20px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  text-align: left;
  color: #5D667B;

}

.rank {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  gap: 0px;
  border-radius: 8px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  border: 1px solid #808A9D;
  background: #768396;

}

.rank-sub {

  width: 60px;
  height: 20px;
  top: 10px;
  left: 212.22px;
  gap: 0px;
  opacity: 0px;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.16px;
  text-align: left;
  color: #FFFFFF;
}

.price-box {
  display: flex;
  flex-direction: column;
}

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

  gap: 32px;
  opacity: 1;
}

.dollar,
.rupees {
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
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
  color: #14B079;
  padding-top: 10px;
}
</style>
