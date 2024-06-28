<template>
     <div class="d-flex flex-wrap justify-content-between">
        <div class="ls-card">
            <div class="box">
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
  margin-top: 20px;
  position: relative;
  border: 1px solid #FBBF4F;
  border-radius: 15px;
  background: linear-gradient(#FA8A42, #FBBF4F);
}

.ls-line {
  margin: 0 auto;
  border-top: 1px solid #109FBF;
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
  margin-bottom: 120px;
  max-width: 320px;
  max-height: 400px;
  padding: 5px;
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