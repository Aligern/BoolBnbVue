<template>
    <div class="">
        <footer class="p-3">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Assistenza</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Policy</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Help</a></li>
              </ul>
            </div>
      
            <div class="col-6 col-md-2 mb-3">
              <h5>Ospitare</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Apri un B&B</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>
      
            <div class="col-6 col-md-2 mb-3">
              <h5>Bool'n Bubbles</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About us</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Team</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Our story</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Review</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact</a></li>
              </ul>
            </div>
      
            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                  <button class="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="ls-line"></div>
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
            <p>© 2024 Team 3 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li><h5>Segui Bool'n Bubbles</h5></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-twitter text-light"></i></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-instagram text-light"></i></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-facebook text-light"></i></a></li>
              <li class="ms-3"><a class="link-body-emphasis" href="#"><i class="fa-brands fa-linkedin text-light"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style lang="scss" scoped>

footer  {
  border-top: 1px solid;
  color: #F8F9FE;
  background: linear-gradient(#29C1E6, #0c7e97)
}

.ls-line {
    border-top: 1px solid #F8F9FE;
}
</style>