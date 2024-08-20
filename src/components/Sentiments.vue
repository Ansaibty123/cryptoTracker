<template>
    <div class="container">
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

.container {
    width: 881px;
    padding: 24px 20px;
    gap: 24px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 70px;
    margin-bottom: 15px;
    background-color: #FFFFFF;

}

.container2 {
    width: 926px;
    height: 204px;
    gap: 10px;
    opacity: 0px;
    display: flex;

}

.box {
    display: flex;
    padding-top: 10px;
    border-radius: 10px;

}

.image-box {
    width: 40px;
    height: 44px;
    padding: 8.41px 8px 7.59px 8px;
    gap: 0px;
    border-radius: 50px;
    opacity: 0px;
    text-align: center;
}

.image {
    width: 28px;
    height: 28px;
    top: 8.41px;
    left: 8px;
    padding: 4.2px 2.69px 5.6px 2.69px;
    gap: 0px;
    opacity: 0px;

}

.text1 {
    width: 120px;
    height: 29px;
    top: -1px;
    gap: 0px;
    opacity: 0px;
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #0F1629;
}

.text2 {
    width: 101px;
    height: 20px;
    padding: 0px 0px 0px 0px;
    gap: 0.04px;
    opacity: 0px;
    font-family: Inter;
    font-size: 18.91px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #44475B;
}

.text3 {
    width: 347px;
    height: 40px;
    gap: 0px;
    opacity: 0px;
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #191C1F;

}

.text4 {
    width: 365px;
    height: 100px;
    gap: 0px;
    opacity: 0px;
    font-family: SF Pro Text;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #3E5765;
}

.text5 {
    width: 165px;
    height: 20px;
    gap: 0px;
    opacity: 0px;
    font-family: Inter;
    font-size: 18.91px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #44475B;
}

.box2 {
    width: 355px;
    top: -0.5px;
    left: 52px;
    gap: 8px;
    opacity: 0px;

}

.news {
    background-color: #E8F4FD;
}

.trending {
    background-color: #EBF9F4;

}

.analyst-box {
    display: flex;
}

.bar-box {
    width: 553.14px;
    height: 114px;
    gap: 0px;
    opacity: 0px;

}


.percentage {
    width: 156.86px;
    height: 120px;
    padding: 10px 40px 0px 0px;
    opacity: 0px;

}
.bar-box {
    width: 553.14px;
    height: 114px;
}

.bar-box2 {
    display: none;
}

@media(max-width:576px) {
    .container {
        width: 384px;
        padding: 10px;
        border-radius: 8px;
        box-sizing: border-box;
        margin-left: 10px;
        margin-right: 10px;
        gap: 20px;
    }

    .container2 {
        /* flex-direction: column; */
        width: 100%;
        height: auto;
        gap: 10px;
    }

    .box {
        width: 100%;
        padding-bottom: 10px;
    }

    .trending {
        display: none;
    }

    .text4 {
        width: 300px;
    }

    .analyst-box {
        padding: 5px;
        box-sizing: border-box;
    }

    .percentage {
        width: 100px;
        height: 100px;
        padding: 0;
    }

    .bar-box {
        display: none;
    }

    .bar-box2 {
        display: flex;
    }

    .image2 {
        width: 100%;
        height: 120px;
    }
}

</style>
