<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar />
      <main class="d-flex justify-content-between">
      </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Detail',
  components: {
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  background: #f6f6f6;
  height: 100vh;
  padding-top: 30px;
}
main {
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  background: #ffffff;
  margin-left: 30px;
  width: 85%;
  padding: 50px;
  height: 83vh;
}
section {
  margin-bottom: 30px;
}
</style>
