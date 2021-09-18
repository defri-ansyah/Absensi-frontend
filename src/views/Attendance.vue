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
            <button type="submit" value="Kerja" class="btn btn-success" v-if="status===null" v-on:click="createAbsensi($event)">Mulai Kerja</button>
            <button type="submit" value="Istirahat" class="btn btn-secondary" v-if="status==='Kerja'" v-on:click="createAbsensi($event)">Istirahat</button>
            <button type="submit" value="Kerja" class="btn btn-info" v-if="status==='Istirahat'" v-on:click="createAbsensi($event)">Lanjut Kerja</button>
            <button type="submit" value="Pulang" class="btn btn-danger" v-if="status==='Kerja' || status==='Istirahat'" v-on:click="createAbsensi($event)">Selesai Kerja</button>
          </div>
        </div>
      </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Attendance',
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
      status: null
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      const storage = JSON.parse(localStorage.getItem('user'))
      axios.get(`${process.env.VUE_APP_SERVICE_API}/absensi/detail/`, { headers: { Authorization: `Bearer ${storage.token}` } })
        .then((res) => {
          if (res) {
            this.status = res.data.data.status ?? null
            console.log(res.data.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createAbsensi (e) {
      const storage = JSON.parse(localStorage.getItem('user'))
      const status = e.target.value
      axios.post(`${process.env.VUE_APP_SERVICE_API}/absensi/`, { status }, { headers: { Authorization: `Bearer ${storage.token}` } })
        .then((res) => {
          if (res) {
            this.getUserInfo()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
