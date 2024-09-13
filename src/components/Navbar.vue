<template>
  <nav class="navbar">
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

  </nav>

</template>


<style scoped>
.navbar {
  height: 80px;
  padding: 0.5px 56px 0.5px 60px;
  gap: 829.23px;
  border: 0px 0px 1px 0px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 12px 0px #1026490F;

}

.nav-box {
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
}

.logo {
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
  padding: 8px;
  border-radius: 8px;
  color: white;
  background: linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  letter-spacing: -0.01em;
}

@media (max-width:768px) {
  .navbar {
    width: 100%;
    height: 64px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }

  .nav-box {
    display: none;
  }

  .logo {
    width: 81px;
    height: 60.75px;

  }
}
</style>