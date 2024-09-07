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
      <div>
        <span class="percentage-change">{{ formattedPercentageChange }}%</span><span class="change-time">(24H)</span>
      </div>
    </div>

    <div>
      <div v-if="CoinSymbol" ref="tradingviewWidget" class="tradingview-widget-container"
        style="width: 837px; height: 460px;">
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
      widgetLoaded: false,
    };
  },
  computed: {
    formattedPriceUSD() {
      return new Intl.NumberFormat('en-US').format(this.priceUSD);
    },
    formattedPriceINR() {
      return new Intl.NumberFormat('en-IN').format(this.priceINR);
    },
    formattedPercentageChange() {
      return  this.percentageChange.toFixed(2);
    },
  },
  methods: {
    async fetchCoinData(coinId = 'bitcoin') {
      try {
        const cacheData = localStorage.getItem(`coinData_${coinId}`);
        if (cacheData) {
          const data = JSON.parse(cacheData);
          this.coinImg = data.image.thumb;
          this.coinName = data.name;
          this.CoinSymbol = data.symbol.toUpperCase();
          this.rank = data.market_cap_rank;
          this.priceUSD = data.market_data.current_price.usd;
          this.priceINR = data.market_data.current_price.inr;
          this.percentageChange = data.market_data.market_cap_change_percentage_24h;
          this.loadTradingViewWidget(this.CoinSymbol);
          return;
        }


        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        console.log(response.data.id);
        localStorage.setItem(`coinData_${coinId}`, JSON.stringify(response.data));


        this.coinImg = response.data.image.thumb;
        this.coinName = response.data.name;
        this.CoinSymbol = response.data.symbol.toUpperCase();
        this.rank = response.data.market_cap_rank;
        this.priceUSD = response.data.market_data.current_price.usd;
        this.priceINR = response.data.market_data.current_price.inr;
        this.percentageChange = response.data.market_data.market_cap_change_percentage_24h;

        this.loadTradingViewWidget(this.CoinSymbol);
      } catch (error) {
        console.error('Error fetching the coin data:', error);
      }
    },

    loadTradingViewWidget(coinSymbol) {
      this.$nextTick(() => {
        if (this.$refs.tradingviewWidget) {
          this.$refs.tradingviewWidget.innerHTML = '';

          const script = document.createElement('script');
          script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
          script.async = true;
          script.innerHTML = JSON.stringify({
            autosize: false,
            width: 837,
            height: 460,
            symbol: `${coinSymbol.toUpperCase()}USD`,
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
            support_host: 'https://www.tradingview.com',
          });

          this.$refs.tradingviewWidget.appendChild(script);
          this.widgetLoaded = true; // Mark widget as loaded
        }
      });
    },
  },

  // Fetch data before the component is fully rendered when route changes
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const coinId = to.params.coinId || 'bitcoin'; // Use the coinId from the route
      console.log('Fetching data for:', coinId);
      vm.fetchCoinData(coinId); // Fetch coin data once the component is ready
    });
  },


  watch: {
    '$route.params.coinId': {
      handler(newVal) {
        const coinId = newVal || 'bitcoin';
        this.widgetLoaded = false; // Reset the widget loaded flag
        this.fetchCoinData(coinId); // Fetch new coin data when the route changes
      },
      immediate: true, 
    },
  },
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


  align-items: center;
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
  width: 84px;
  height: 28px;
  padding: 8px;
  border-radius: 4px;
  background-color: #EBF9F4;
  margin-right: 5px;
}



.change-time {
  width: 39px;
  height: 27px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
  color: #768396;

}

@media (max-width: 576px) {
  .container {
    width: 384px;
    padding: 10px;
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