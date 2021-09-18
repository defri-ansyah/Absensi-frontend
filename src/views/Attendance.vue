<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar />
      <main class="d-flex justify-content-between">
        <div>
          <h1>Hi, Bambang Prakoso</h1>
          <span>"The only way to do great work is to love what you do"</span>
        </div>
        <div class="d-flex wrap">
          <p class="mb-3">Silahkan memilih aksi dibawah ini:</p>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-success">Mulai Kerja</button>
            <button type="submit" class="btn btn-secondary">Istirahat</button>
            <button type="submit" class="btn btn-info">Lanjut Kerja</button>
            <button type="submit" class="btn btn-danger">Selesai Kerja</button>
          </div>
        </div>
      </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Attendance',
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
h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  letter-spacing: -0.165px;
  color: #c0a6ff;
  margin-bottom: 20px;
}
span{
  display: flex;
  font-style: italic;
  font-size: 20px;
  text-align: center;
}
.wrap {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin: 10px;
}
</style>
