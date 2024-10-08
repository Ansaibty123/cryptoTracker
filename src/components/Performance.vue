<template>
  <div class="card">
      <div class="title">Performance</div>
      <div class="range" v-if="performance.todayLow && performance.todayHigh && performance.currentPrice">
        <div class="flex2">
          <div class="text1">Today's Low</div>
          <div class="price1">{{ performance.todayLow }}</div>
        </div>
        <div class="bar">
          <span :style="{ left: getPosition() + '%' }">{{ performance.currentPrice }}</span>
        </div>
        <div class="flex2">
          <div class="text1">Today's High</div>
          <div class="price1">{{ performance.todayHigh }}</div>
        </div>
      </div>
      <div class="range" v-if="performance.yearLow && performance.yearHigh && performance.currentPrice">
        <div class="flex2">
          <div class="text1">52W Low</div>
          <div class="price1">{{ performance.yearLow }}</div>
        </div>
        <div class="bar">
          <span :style="{ left: getPosition52W() + '%' }">{{ performance.currentPrice }}</span>
        </div>
        <div class="flex2">
          <div class="text1">52W High</div>
          <div class="price1">{{ performance.yearHigh }}</div>
        </div>
      </div>

    
      <div class="title2">Fundamentals</div>
      <div class="fundamental-box">
        <section class="flex">
          <div class="item" v-if="fundamentals.bitcoinPrice">
            <div class="text1">{{ fundamentals.coinName.charAt(0).toUpperCase() + fundamentals.coinName.slice(1) }}
              Price</div>
            <div class="value">{{ fundamentals.bitcoinPrice }}</div>
          </div>
          <div class="item" v-if="fundamentals.low24h && fundamentals.high24h">
            <div class="text1">24h Low / 24h High</div>
            <div class="value">{{ fundamentals.low24h }} / {{ fundamentals.high24h }}</div>
          </div>
          <div class="item" v-if="fundamentals.low7d && fundamentals.high7d">
            <div class="text1">7d Low / 7d High</div>
            <div class="value">{{ fundamentals.low7d }} / {{ fundamentals.high7d }}</div>
          </div>
          <div class="item" v-if="fundamentals.tradingVolume">
            <div class="text1">Trading Volume</div>
            <div class="value">{{ fundamentals.tradingVolume }}</div>
          </div>
          <div class="item" v-if="fundamentals.marketCapRank">
            <div class="text1">Market Cap Rank</div>
            <div class="value">#{{ fundamentals.marketCapRank }}</div>
          </div>
        </section>
        <section class="flex">
          <div class="item" v-if="fundamentals.marketCap">
            <div class="text1">Market Cap</div>
            <div class="value">{{ fundamentals.marketCap }}</div>
          </div>
          <div class="item" v-if="fundamentals.marketCapDominance">
            <div class="text1">Market Cap Dominance</div>
            <div class="value">{{ fundamentals.marketCapDominance }}</div>
          </div>
          <div class="item" v-if="fundamentals.volumeMarketCap">
            <div class="text1">Volume / Market Cap</div>
            <div class="value">{{ fundamentals.volumeMarketCap }}</div>
          </div>
          <div class="item" v-if="fundamentals.ath">
            <div class="text1">All-Time High</div>
            <div class="value">{{ fundamentals.ath }} <span class="change">{{ fundamentals.athChangePercent
                }}%</span></div>
            <div class="date">{{ fundamentals.athDate }}</div>
          </div>
          <div class="item" v-if="fundamentals.atl">
            <div class="text1">All-Time Low</div>
            <div class="value">{{ fundamentals.atl }} <div class="change positive">{{ fundamentals.atlChangePercent
                }}%</div>
            </div>
            <div class="date">{{ fundamentals.atlDate }}</div>
          </div>
        </section>
      </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Performance",
  data() {
    return {
      performance: {
        todayLow: null,
        todayHigh: null,
        yearLow: null,
        yearHigh: null,
        currentPrice: null,
      },
      fundamentals: {
        coinName: null,
        bitcoinPrice: null,
        low24h: null,
        high24h: null,
        low7d: null,
        high7d: null,
        tradingVolume: null,
        marketCapRank: null,
        marketCap: null,
        marketCapDominance: null,
        volumeMarketCap: null,
        ath: null,
        athChangePercent: null,
        athDate: null,
        atl: null,
        atlChangePercent: null,
        atlDate: null,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    '$route.params.coinId': 'fetchData', // re-fetch data when route changes
  },
  methods: {
    fetchData() {
      const coinId = this.$route.params.coinId || "bitcoin";
      const storedData = localStorage.getItem(`coinData_${coinId}`);

      if (storedData) {
        const data = JSON.parse(storedData);
        this.processData(data);
      } else {

        const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
        axios
          .get(url)
          .then((response) => {
            const data = response.data;
            localStorage.setItem(`coinData_${coinId}`, JSON.stringify(data));
            this.processData(data);
          })
          .catch((error) => {
            console.error("There was an error fetching the data!", error);
          });
      }
    },
    processData(data) {
      try {
        this.performance.todayLow = this.formatPrice(data.market_data.low_24h.usd);
        this.performance.todayHigh = this.formatPrice(data.market_data.high_24h.usd);
        this.performance.yearLow = this.formatPrice(data.market_data.low_24h.usd);
        this.performance.yearHigh = this.formatPrice(data.market_data.high_24h.usd);
        this.performance.currentPrice = this.formatPrice(data.market_data.current_price.usd);

        this.fundamentals.coinName = data.id;
        this.fundamentals.bitcoinPrice = this.formatPrice(data.market_data.current_price.usd);
        this.fundamentals.low24h = this.formatPrice(data.market_data.low_24h.usd);
        this.fundamentals.high24h = this.formatPrice(data.market_data.high_24h.usd);
        this.fundamentals.low7d = "N/A";
        this.fundamentals.high7d = "N/A";
        this.fundamentals.tradingVolume = this.formatPrice(data.market_data.total_volume.usd);
        this.fundamentals.marketCapRank = data.market_cap_rank;
        this.fundamentals.marketCap = this.formatPrice(data.market_data.market_cap.usd);
        this.fundamentals.marketCapDominance = "N/A";
        this.fundamentals.volumeMarketCap = (data.market_data.total_volume.usd / data.market_data.market_cap.usd).toFixed(2);
        this.fundamentals.ath = this.formatPrice(data.market_data.ath.usd);
        this.fundamentals.athChangePercent = data.market_data.ath_change_percentage.usd.toFixed(2);
        this.fundamentals.athDate = new Date(data.market_data.ath_date.usd).toLocaleDateString();
        this.fundamentals.atl = this.formatPrice(data.market_data.atl.usd);
        this.fundamentals.atlChangePercent = data.market_data.atl_change_percentage.usd.toFixed(2);
        this.fundamentals.atlDate = new Date(data.market_data.atl_date.usd).toLocaleDateString();
      } catch (error) {
        console.error("Error processing API response data:", error);
      }
    },
    formatPrice(value) {
      if (value == null) return "N/A";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    getPosition() {
      const min = parseFloat(this.performance.todayLow.replace(/[^0-9.-]+/g, ""));
      const max = parseFloat(this.performance.todayHigh.replace(/[^0-9.-]+/g, ""));
      const current = parseFloat(this.performance.currentPrice.replace(/[^0-9.-]+/g, ""));
      return ((current - min) / (max - min)) * 100;
    },
    getPosition52W() {
      const min = parseFloat(this.performance.yearLow.replace(/[^0-9.-]+/g, ""));
      const max = parseFloat(this.performance.yearHigh.replace(/[^0-9.-]+/g, ""));
      const current = parseFloat(this.performance.currentPrice.replace(/[^0-9.-]+/g, ""));
      return ((current - min) / (max - min)) * 100;
    },
  },
};
</script>


<style scoped>


.flex {
  display: flex;
  flex-direction: column;
  gap: 15px;
}



.title {
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  color: #0F1629;
  margin-bottom: 10px
}

.text1 {
  font-family: Inter;
  font-size: 13.78px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #44475B;
}

.price1 {
  font-family: Inter;
  font-size: 15.63px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #44475B;
}


.range {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bar {
  width: 582.8px;
  height: 4.63px;
  border-radius: 10px;
  background: linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%);


}

.bar span {
  position: absolute;
  top: -20px;
  transform: translateX(-50%);
}

.title2 {
  
  font-family: Inter;
  font-size: 18.91px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #44475B;
}

.fundamental-box {
  display: flex;
  justify-content: space-between;
}

.value {
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  text-align: right;
  color: #111827;
}

.item {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.value {
  font-weight: bold;
}

.change {
  color: red;
}

.change.positive {
  color: green;
}

.date {
  font-size: 0.8rem;
  color: gray;
}
.flex2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

@media(max-width:992px) {
  .fundamental-box {
    flex-direction: column;
  }

  .flex2 {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
