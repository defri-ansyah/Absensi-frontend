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
          <tbody v-for="(item, index) in datalist" :key="index">
            <tr>
              <button v-on:click="handleDetail(item.id)">test</button>
              <td>{{item.fullname}}</td>
              <td>{{item.divisi}}</td>
              <td>{{item.currentAbsen ? item.currentAbsen.status:''}}</td>
            </tr>
          </tbody>
        </table>
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
  name: 'Home',
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
      datalist: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleDetail (id) {
      this.$router.push('/detail/' + id)
    },
    getList () {
      axios.get(`${process.env.VUE_APP_SERVICE_API}/user/homepage`)
        .then((res) => {
          if (res) {
            this.datalist = res.data.data
            console.log(res.data.data)
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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  background: #ffffff;
  margin-left: 30px;
  width: 85%;
  padding: 50px;
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
