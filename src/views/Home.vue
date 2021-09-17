<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar />
      <main>
        <h1>Data Karyawan</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">Divisi</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </main>
    </section>
    <Footer />
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
  background: #ffffff;
  margin-left: 30px;
  width: 85%;
  padding: 30px;
  height: 83vh;
  overflow: scroll;
}
section {
  margin-bottom: 30px;
}
h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #232323;
  margin-bottom: 20px;
}
thead {
  background: #c0a6ff;
}
</style>
