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
      <span class="rank"><span class="rank-sub">Rank# {{ rank }}</span></span>
    </div>

    <div class="price-container">
      <div class="price-box">
        <span class="dollar">$ {{ formattedPriceUSD }}</span>
        <span class="rupees">₹ {{ formattedPriceINR }}</span>
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

export default {
  data() {
    return {
      coinImg: null,
      coinName: null,
      CoinSymbol: null,
      rank: null,
      priceUSD: null,
      priceINR: null,
      percentageChange: null,
    };
  },
  computed: {
    formattedPriceUSD() {
      return new Intl.NumberFormat('en-US').format(this.priceUSD);
    },
    formattedPriceINR() {
      return new Intl.NumberFormat('en-IN').format(this.priceINR);
    },
  },
  methods: {
    async fetchBitcoinPrice() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');

        // console.log(response)
        this.coinImg = response.data.image.thumb;
        this.coinName = response.data.name;
        this.CoinSymbol = response.data.symbol;
        this.rank = response.data.market_cap_rank;
        this.priceUSD = response.data.market_data.current_price.usd;
        this.priceINR = response.data.market_data.current_price.inr;
        this.percentageChange = response.data.market_data.market_cap_change_percentage_24h;
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
.container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px 20px;
  width: 881px;
  gap: 20px;
}

.coin-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coin-logo {
  width: 36px;
  height: 36px;
}

.coin-name {
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  color: #0B1426;
}

.coin-symbol {
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  color: #5D667B;
}

.rank {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #808A9D;
  background: #768396;
}

.rank-sub {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
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

.price-container {
  display: flex;
  gap: 32px;
}

.dollar,
.rupees {
  font-family: Inter;
  font-size: 28px;
  font-weight: 600;
  color: #0B1426;
}

.rupees {
  font-size: 16px;
  font-weight: 500;
}

.percentage-change {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  color: #14B079;
  padding-top: 10px;
}

@media (max-width: 576px) {
  .container {
    width: 384px;
    padding: 10px ;
    border-radius: 8px;
    border: 1px;
    border: 1px solid #DEE1E6;
    display: flex;
    gap: 20px;
    box-sizing: border-box;

  }
  .tradingview-widget-container {
    height: auto;
    max-width: 100%;
  }
}
</style>