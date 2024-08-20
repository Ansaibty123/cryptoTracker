<template>
    <div class="container">
        <div class="link">Overview</div>
        <div class="link">Fundamentals</div>
        <div class="link">New Insights</div>
        <div class="link">Sentiments</div>
        <div class="link">Team</div>
        <div class="link">Technicians</div>
        <div class="link">Tokenomics</div>
    </div>
</template>
<style scoped>
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
    height: 70px;
    gap: 6px;
}
@media(max-width: 576px){
    .container {
        width: 384px;
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