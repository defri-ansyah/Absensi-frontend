<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar/>
      <main>
      </main>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  background: #FFFFFF;
  margin-left: 30px;
  width: 85%;
}
section {
  margin-bottom: 30px;
}
</style>
