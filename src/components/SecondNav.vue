<template>
    <div class="container">
        <a href="#" class="links">Overview</a>
        <a href="#performance-section" class="links">Fundamentals</a>
        <a href="#about-section" class="links">About</a>
        <a href="#sentiments-section" class="links">Sentiments</a> 
        <a href="#team-section" class="links">Team</a>
        <a href="#" class="links">Technicians</a>
        <a href="#tokenomics-section" class="links">Tokenomics</a>    </div>
</template>
<style scoped>
html {
  scroll-behavior: smooth;
}
div a {
    text-decoration: none;
    color: #3E424A;
    display: flex;
    align-items: center;
}
.container {
    display: flex;
    width: 881px;
    height: 48px;
    gap: 38px;
    border: 0px 0px 1px 0px;
    border-bottom: 1px solid #D3E0E6;
    margin-left: 70px;

}

.links {
    width: 106px;
    height: 60px;
    gap: 6px;
    text-align: center;
}

@media(max-width: 576px) {
    .container {
        width: 384px;
        height: auto;
        padding: 10px;
        gap: 24px;
        margin-left: 10px;
        border-radius: 8px;
        margin-right: 10px;
        overflow-x: auto;
        white-space: nowrap;
    }
}
</style>