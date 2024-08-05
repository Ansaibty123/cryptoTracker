<template>
  <div class="items">
    <div class="Flex coin-box">
      <img :src="coin.item.thumb" alt="coin logo" class="coin-logo" />
      <span class="coin-name">{{ coin.item.symbol }}</span>
    </div>
    <p class="price"> ${{ coin.item.price_btc.toFixed(6) }} </p>
    <div class="graph-container">
      <img :src="coin.item.data.sparkline" alt="graph">
    </div>
  </div>
</template>

<script>
export default {
    name : "CoinCard",
    props : {
        coin : {
            type : Object,
            required : true,
        }
    }
}
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
  display: flex ;
  justify-content: center;
  align-items: center;
}
</style>