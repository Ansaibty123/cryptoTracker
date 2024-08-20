<template>
  <div class="container">
    <div class="header-bar">
      <img src="@/assets/logo.png" alt="KoinX" class="logo" />
      <div class="nav-box">
        <nav class="nav-links">
          <a href="#">Crypto Taxes</a>
          <a href="#">Free Tools</a>
          <a href="#">Resource Center</a>


        </nav>

        <button class="get-started">Get Started</button>

      </div>

    </div>

  </div>

</template>

<style scoped>
.container {
  width: 1400px;
  height: 80px;
  left: -0.15px;
  padding: 0.5px 56px 0.5px 60px;
  gap: 829.23px;
  border: 0px 0px 1px 0px;
  opacity: 0px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 12px 0px #1026490F;
  margin-bottom: 15px;

}

.nav-box {
  width: 909px;
  height: 79px;
  display: flex;
  align-items: center;

  justify-content: flex-end;
  padding-right: 10px;
  gap: 15px;
}

.logo {
  width: 96px;
  height: 72px;
  opacity: 0px;
  margin-left: 10px;


}

.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  gap: 15px;

}

.nav-links a {
  text-decoration: none;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #0F1629;
}

.get-started {
  width: 136px;
  height: 40px;
  padding: 8px;
  gap: 8px;
  border-radius: 8px;
  opacity: 0px;
  color: white;
  background: linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  letter-spacing: -0.01em;
  margin-right: 7px;
}

@media (max-width:576px) {
  .container {
    width: 411px;
    height: 64px;
    gap: 0px;
    opacity: 0px;
    box-sizing: border-box;
  }
  .nav-box{
    display: none;
  }
}
</style>