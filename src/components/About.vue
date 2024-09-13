<template>
    <section class="card">
        <div class="heading">
            About Bitcoin
        </div>

        <div class="main-box">
            <div class="content">
                <div class="question">What is Bitcoin?</div>
                <div class="text text1">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14
                    B. BTC is
                    +0.36% in the last
                    24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
                    7-day
                    all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M
                    BTC.
                </div>
            </div>
            <div>
                <div class="question">Lorem ipsum dolor sit amet</div>
                <div class="text text2">
                    <span>
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique
                        pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim
                        facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                        Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
                        morbi sodales odio sed rhoncus.
                    </span>
                    <span>
                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor
                        amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
                        velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna
                        eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer
                        dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis
                        ultricies at.
                    </span>
                    <span>
                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
                        Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis
                        lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
                    </span>
                </div>
            </div>
            <div class="card-image">
                <div class="heading">Already Holding Bitcoin?</div>
                <div>
                    <div class="image-box">
                        <img src="@/assets/mobilepic.png" alt="">
                    </div>
                    <div class="image-box2">
                        <img src="@/assets/mobilepic2.png" alt="">
                    </div>
                </div>

            </div>
            <div class="text text3">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi
                adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue
                ipsum fames amet dui.
                Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
            </div>
        </div>
    </section>
</template>

<style scoped>
.main-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.heading {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #0F1629;
}

.card-image {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.image-box2 {
    display: none;
}

.question {
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    text-align: left;
    color: #0B1426;
    padding-bottom: 10px;
}

.text {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    text-align: left;
    color: #3E424A;
}



.text2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

@media (max-width: 992px) {

    .image-box {
        display: none;
    }

    .image-box2 {
        display: flex;
        width: 100%;
    }
    img{
        max-width: 100%;
    }


}
</style>
