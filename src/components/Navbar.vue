<template>
  <div class="header-bar">
    <img src="@/assets/logo.png" alt="KoinX" class="logo" />
    <nav class="nav-links">
      <a href="#">Crypto Taxes</a>
      <a href="#">Free Tools</a>
      <a href="#">Resource Center</a>
      <button class="get-started">Get Started</button>
    </nav>
  </div>
</template>


<style scoped>
.header-bar {
  width: 1440px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;
}

.logo {
  width: 96pxpx;
  height: 72pxpx;
  margin-left: 55px;
  top: 4px;
  gap: 72px;
  opacity: 0px;

}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #000;
  font-size: 16px;
  padding: 10px 0px;
  font-family: Inter;
  font-weight: 600;
  line-height: 19.36px;
  letter-spacing: -0.01em;
  text-align: left;


}

.get-started {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 70px;
}
</style>
