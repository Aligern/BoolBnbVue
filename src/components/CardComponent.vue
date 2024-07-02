<template>
     <div class="container d-flex overflow-y-hidden">

        <div id="ls-card-container" class="">
            <div class="card">
                <img src="../assets/img/cover-12.jpg" alt="">
                <div class="card-content">
                    <h2>card heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error veritatis corporis aut rerum consequatur soluta est dolores sequi dolorum nisi ullam aspernatur maxime eligendi aliquam, dolore hic illo rem neque. Doloribus, magnam. Iusto tempore distinctio possimus eveniet. Laboriosam, dolorem?</p>
                    <a href="#" class="button">
                        More informations 
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div id="ls-card-container" class="">
            <div class="card">
                <img src="../assets/img/cover-12.jpg" alt="">
                <div class="card-content">
                    <h2>card heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error veritatis corporis aut rerum consequatur soluta est dolores sequi dolorum nisi ullam aspernatur maxime eligendi aliquam, dolore hic illo rem neque. Doloribus, magnam. Iusto tempore distinctio possimus eveniet. Laboriosam, dolorem?</p>
                    <a href="#" class="button">
                        More informations 
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div id="ls-card-container" class="">
            <div class="card">
                <img src="../assets/img/cover-12.jpg" alt="">
                <div class="card-content">
                    <h2>card heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error veritatis corporis aut rerum consequatur soluta est dolores sequi dolorum nisi ullam aspernatur maxime eligendi aliquam, dolore hic illo rem neque. Doloribus, magnam. Iusto tempore distinctio possimus eveniet. Laboriosam, dolorem?</p>
                    <a href="#" class="button">
                        More informations 
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
        <div id="ls-card-container" class="">
            <div class="card">
                <img src="../assets/img/cover-12.jpg" alt="">
                <div class="card-content">
                    <h2>card heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae error veritatis corporis aut rerum consequatur soluta est dolores sequi dolorum nisi ullam aspernatur maxime eligendi aliquam, dolore hic illo rem neque. Doloribus, magnam. Iusto tempore distinctio possimus eveniet. Laboriosam, dolorem?</p>
                    <a href="#" class="button">
                        More informations 
                        <span>
                            <i class="fas fa-chevron-right"></i>
                        </span>
                    </a>
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

#ls-card-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  .card {
  position: relative;
  width: 24rem;
  height: 36rem;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  color: rgb(240, 240, 240);
  box-shadow: 0 10px 10px 3px rgba(0, 0, 0, 0.2);
 
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.9;
    transition: opacity .2s ease-out;
  }

  h2 {
    position: absolute;
    inset: auto auto 40px 40px;
    margin: 0;
    transition: inset .3s .3s ease-out;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: normal;
    text-transform: uppercase;
  }
  
  p, a {
    position: absolute;
    opacity: 0;
    max-width: 80%;
    transition: opacity .3s ease-out;
  }
  
  p {
    inset: auto auto 80px 30px;
  }
  
  a {
    inset: auto auto 40px 30px;
    color: inherit;
    text-decoration: none;
  }
  
  &:hover h2 {
    inset: auto auto 300px 30px;
    transition: inset .3s ease-out;
  }
  
  &:hover p, &:hover a {
    opacity: 1;
    transition: opacity .5s .1s ease-in;
  }
  
  &:hover img {
    transition: opacity .3s ease-in;
    opacity: 1;
  }

}

.material-symbols-outlined {
  vertical-align: middle;
}


}


</style>