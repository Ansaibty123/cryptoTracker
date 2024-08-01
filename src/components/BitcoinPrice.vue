<template>
    <div>
      <!-- <h2>Bitcoin Price</h2>
      <p>USD: {{ priceUSD }}</p>
      <p>INR: {{ priceINR }}</p>
      <p>24H Change: {{ change24h }}%</p> -->
      <div ref="tradingviewWidget" class="tradingview-widget-container" style="width: 837px; height: 515px; margin-left: 70px;">
        <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px); width:100%"></div>
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
        // priceUSD: null,
        // priceINR: null,
        // change24h: null,
      };
    },
    methods: {
    //   async fetchBitcoinPrice() {
    //     try {
    //       const response = await axios.get(
    //         'https://api.coingecko.com/api/v3/simple/price',
    //         {
    //           params: {
    //             ids: 'bitcoin',
    //             vs_currencies: 'usd,inr',
    //             include_24hr_change: 'true'
    //           }
    //         }
    //       );
    //       this.priceUSD = response.data.bitcoin.usd;
    //       this.priceINR = response.data.bitcoin.inr;
    //       this.change24h = response.data.bitcoin.usd_24h_change;
    //     } catch (error) {
    //       console.error("There was an error fetching the Bitcoin price:", error);
    //     }
    //   },
      loadTradingViewWidget() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "autosize": false,
          "width": 837,
          "height": 515,
          "symbol": "BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        });
        this.$refs.tradingviewWidget.appendChild(script);
      }
    },
    mounted() {
    //   this.fetchBitcoinPrice();
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
  </style>
  