<template>
  <footer class="footer close-nav-onclick">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mx-auto">
          <div class="text-center small">
            Copyright © 2020 Developed by Carlos Alberto Arroyo Martínez.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 1.5rem 0;
  background-color: #e3e3e3;
  color: var(--gray-600);
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
