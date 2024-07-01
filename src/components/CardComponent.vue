<template>
     <div class=" d-flex flex-wrap justify-content-between row">
        <div class="ls-card col-3 col-sm-12 col-md-12 col-lg-4 ">
            <div class="box ls-glass">
                <div class="d-flex justify-content-center">
                    <img id="ls-img" src="/src/assets/img/cover-12.jpg" alt="babilon">
                </div>
                <div class="ls-line"></div>
                <div class="p-2">
                    <h1 class="text-center">Bool 'n' bubbles</h1>
                    <p class="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi pariatur praesentium recusandae tempora voluptate impedit nemo vitae. Nulla, enim sed.
                    </p>
                </div>
            </div>
        </div> 

        <div class="ls-card col-3 col-sm-12 col-md-12 col-lg-4">
            <div class="box ls-glass">
                <div class="d-flex justify-content-center">
                    <img id="ls-img" src="/src/assets/img/cover-12.jpg" alt="babilon">
                </div>
                <div class="ls-line"></div>
                <div class="p-2">
                    <h1 class="text-center">Bool 'n' bubbles</h1>
                    <p class="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi pariatur praesentium recusandae tempora voluptate impedit nemo vitae. Nulla, enim sed.
                    </p>
                </div>
            </div>
        </div> 

        <div class="ls-card col-3 col-sm-12 col-md-12 col-lg-4">
            <div class="box ls-glass">
                <div class="d-flex justify-content-center">
                    <img id="ls-img" src="/src/assets/img/cover-12.jpg" alt="babilon">
                </div>
                <div class="ls-line"></div>
                <div class="p-2">
                    <h1 class="text-center">Bool 'n' bubbles</h1>
                    <p class="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi pariatur praesentium recusandae tempora voluptate impedit nemo vitae. Nulla, enim sed.
                    </p>
                </div>
            </div>
        </div> 
        <div class="ls-card col-3 col-sm-12 col-md-12 col-lg-4">
            <div class="box ls-glass">
                <div class="d-flex justify-content-center">
                    <img id="ls-img" src="/src/assets/img/cover-12.jpg" alt="babilon">
                </div>
                <div class="ls-line"></div>
                <div class="p-2">
                    <h1 class="text-center">Bool 'n' bubbles</h1>
                    <p class="card-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi pariatur praesentium recusandae tempora voluptate impedit nemo vitae. Nulla, enim sed.
                    </p>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
    }
</script>

<style lang="scss" scoped>

img {
  width: 100%;
  object-fit: cover;
}

.box {
  color: #F8F9FE;
  position: relative;
  border-radius: 15px;
  border: 1px solid #FBBF4F;

  p {
    text-wrap: balance;
    text-align: center;
  }
}

.ls-line {
  margin: 0 auto;
  border-top: 1px solid #FBBF4F;
  width: 90%;
  margin-top: 20px;
}

#ls-img {
  margin-top: 20px;
  width: 250px;
  aspect-ratio: 1;
  animation: radius 10.3s linear infinite;
  box-shadow: 4px 7px 5px rgba(0, 0, 0, 0.2);
  position: relative;
}

.ls-card:hover #ls-img {
  animation-play-state: paused;
}

.ls-card {
  margin-bottom: 30px;
  min-width: 320px;
  min-height: 400px;
  cursor: pointer;
}

/* bubble animation */
@keyframes radius {
  0% , 100% {
    border-radius: 60% 55% 70% 30% / 43% 30% 70% 60%;
  }
  33% {
    border-radius: 55% 65% 55% 45% / 60% 50% 60% 45%;
  }
  66% {
    border-radius: 40% 85% 58% 63% / 50% 40% 50% 40%;
  }
}

</style>