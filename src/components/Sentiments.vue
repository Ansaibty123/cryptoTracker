<template>
    <div class="card">
        <div class="text1">
            Sentiments
        </div>
        <div class="flex">

            <div class="text2"> Key Events</div>
            <img src="@/assets/info.png " alt="info-logo" class="info">
        </div>
        <section class="container2">
            <div class="box news">
                <div class="image-box">
                    <img src="@/assets/news.png" alt="" class="image">
                </div>
                <div class="box2">
                    <div class="text3">
                        Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.

                    </div>
                    <div class="text4">
                        Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien
                        quam
                        viverra
                        adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
                        natoque
                        lacinia libero enim.
                    </div>

                </div>

            </div>
            <div class="box trending">
                <div class="image-box">
                    <img src="@/assets/TrendingLogo.png" alt="" class="image">
                </div>
                <div class="box2">
                    <div class="text3">
                        Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.

                    </div>
                    <div class="text4">
                        Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien
                        quam
                        viverra
                        adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra
                        natoque
                        lacinia libero enim.
                    </div>

                </div>

            </div>



        </section>
        <section class="analyst">
            <div class="flex">
                <div class="text5">Analyst Estimates</div>
                <img src="@/assets/info.png" alt="info-logo">
            </div>
            <div class="analyst-box">

                <img src="@/assets/percentage.png" alt="" class="percentage">

                <div class="bar-box">
                    <img src="@/assets/bar.png" alt="" class="image2">
                </div>
                <div class="bar-box2">
                    <img src="@/assets/bar2.png" alt="" class="image2">
                </div>

            </div>
        </section>

    </div>



</template>
<style scoped>
.flex {
    display: flex;
    gap: 5px;
}

.container2 {
    display: flex;
    flex-direction: row;
    gap: 14px;
    overflow-x: auto;

}

.box {
    display: flex;
    padding: 10px;
    border-radius: 10px;
    min-width: 456px;
    box-sizing: border-box;


}

.image-box {
    width: 40px;
    height: 44px;
    padding: 8.41px 8px 7.59px 8px;
    border-radius: 50px;
    text-align: center;
}

.image {
    width: 28px;
    height: 28px;

}

.text1 {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #0F1629;
}

.text2 {
    font-family: Inter;
    font-size: 18.91px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #44475B;
}

.text3 {
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #191C1F;

}

.text4 {
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #3E5765;
}

.text5 {
    font-family: Inter;
    font-size: 18.91px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #44475B;
}

.box2 {
    display: flex;
    flex-direction: column;
    gap: 8px;

}

.news {
    background-color: #E8F4FD;
    width: 456px;
    
}

.trending {
    background-color: #EBF9F4;
    width: 456px;


}
.analyst{
    display: flex;
    flex-direction: column;
    gap: 24px ;
}
.analyst-box {
    display: flex;
}






.bar-box2 {
    display: none;
}

@media(max-width:992px) {

    .bar-box {
        display: none;
    }

    .bar-box2 {
        display: flex;
        width: 100%;
    }
    .bar-box2 img {
        max-width: 100%;
    }

}
</style>
