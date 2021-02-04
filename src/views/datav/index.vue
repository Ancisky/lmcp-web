<template>
  <div id="index">
    <dv-full-screen-container class="bg-black" >
      <dv-loading v-if="loading">Loading...</dv-loading>

    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
#index {

* {
  color: #D3D6DD;
}

.bg-black {
  background-color: rgba(0, 0, 0, .86);
}

}
</style>
