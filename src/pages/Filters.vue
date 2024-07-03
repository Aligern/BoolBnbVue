<template>
    
  <div id="pageFilter" class="container">

    <h1 class="text-black text-center ">content</h1>

    <div class="d-flex gap-3">
      <div id="services">
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Parking</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">WiFi</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Kitchen</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Swimming Pool</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Air Conditioning</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Heating</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Dryer</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Gym</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Elevator</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Pet Friendly</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Smoke Detector</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Laptop-friendly Workspace</label>
        </div>
        <div class="d-flex">
          <input type="checkbox" class="form-check-input me-2 ">
          <label for="">Cable TV</label>
        </div>
      </div>
      <div id="filter"></div>
    </div>
    <div class="filter-distance">
      <label for="distance-range">Distanza (km):</label>
      <input class="w-75" type="range" id="distance-range" min="0" max="50" value="25">
      <span id="distance-value">25 km</span>
    </div>


  </div>
</template>

<script>
    export default {
        name: 'Filters',
    }
</script>

<style lang="scss" scoped>

#services,
  #filter,
  .filter-distance {
    border: 1px solid #29C1E6;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }

  #services {
    width: 35%;
  }

  #filter {
    width: 65%;
  }

  .filter-distance {
    display: flex;
    justify-content: space-between;
  }


</style>