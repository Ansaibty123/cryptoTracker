<template>
    <div class="card ">
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


.heading {
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    line-height: 28.8px;
    text-align: left;
    color: #0F1629;
}

.text {
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 25.6px;
    text-align: left;
    color: #3E424A;
}

.person-box {
    padding: 11.19px;
    gap: 16px;
    border-radius: 7.46px;
    background-color: #E8F4FD;
    display: flex;
    align-items: center;
}

.person {
    gap: 13.19px;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.image {
    height: 104.81px;
    border-radius: 6.68px;

}

.name {
    font-family: Inter;
    font-size: 15px;
    font-weight: 600;
    line-height: 18.15px;
    text-align: center;
    color: #0F1629;
}
@media(max-width:992px) {
  
  .person-box{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
  }

}
</style>