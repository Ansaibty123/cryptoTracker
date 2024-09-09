<template>
    <section class="container">
        <div class="text-container">
            <div class="sub-container">
                <p class="text1">Get Started with KoinX<br> for FREE</p>
                <p class="text2">With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.</p>
            </div>

        </div>
        <img src="@/assets/poster.png" alt="poster" class="poster">

        <button class="button">
            Get Started for FREE ->
        </button>
    </section>
</template>
<style scoped>
.container {
    background-color: #0052FE;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: white;
    text-align: center;
    padding: 31px 49px;
    gap: 19px;
}

.text1 {
    line-height: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: white;
}

.text2 {
    
    line-height: 24px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #F2F2F2;
}



.sub-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.button {
    background-color: white;
    color: #0052FE;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
}

.button:hover {
    background-color: #f0f0f0;
}

.poster {
    width: 178.66px;
    height: 166.22px;

}

@media(max-width:992px) {
    .container {
       
        padding: 10px;
        border-radius: 8px;
        border: 1px;
        box-sizing: border-box;
        margin-bottom: 24px;

    }
}
</style>
