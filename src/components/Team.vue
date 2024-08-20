<template>
    <div class="container">
        <div class="heading">
            Team
        </div>
        <div class="text">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit
            egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </div>
        <div class="person-box">
            <div class="person">
                <img src="@/assets/person1.png" alt="John Smith" class="image">
                <div class="name">John Smith</div>
            </div>
            <div class="text2">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus
                sit
                ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed
                pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies
                feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </div>
        </div>

        <div class="person-box">
            <div class="person">
                <img src="@/assets/person2.png" alt="Elina Williams" class="image">
                <div class="name">John Smith</div>
            </div>
            <div class="text2">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus
                sit
                ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed
                pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies
                feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </div>
        </div>
        <div class="person-box">
            <div class="person">
                <img src="@/assets/person3.png" alt="John Smith" class="image">
                <div class="name">John Smith</div>

            </div>
            <div class="text2">
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus
                sit
                ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed
                pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies
                feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
            </div>
        </div>
    </div>


</template>
<style scoped>
.container {
    width: 881px;
    padding: 24px 20px;
    gap: 24px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;
    background-color: #FFFFFF;
    margin-left: 70px;
    margin-bottom: 15px;
    box-sizing: border-box;
}

.heading {
    width: 64px;
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
    padding-bottom: 15px;
}

.text {
    width: 830px;
    height: 52px;
    gap: 0px;
    opacity: 0px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    text-align: left;
    color: #3E424A;
    padding-bottom: 10px;
}

.person-box {
    width: 821px;
    height: 177.51px;
    padding: 11.19px;
    gap: 16px;
    border-radius: 7.46px;
    opacity: 0px;
    background-color: #E8F4FD;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.person {
    width: 128.61px;
    height: 155.12px;
    gap: 13.19px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.image {
    width: 96.35px;
    height: 104.81px;
    gap: 0px;
    border-radius: 6.68px 0px 0px 0px;
    opacity: 0px;

}

.name {
    height: 18px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    line-height: 18.15px;
    text-align: center;
    color: #0F1629;
}
@media(max-width:576px) {
  .container {
    width: 384px;
    padding: 10px;
    border-radius: 8px;
    border: 1px;
    box-sizing: border-box;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .person-box{
    display: flex;
    flex-direction: column;
    width: 365px;
    box-sizing: border-box;
    height: auto;
    padding: 20px;
  }
  .text{
    width: 384px;
    height: auto;
  }

}
</style>