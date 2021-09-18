<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar />
      <main class="d-flex">
        <span class="mb-4">Nama lengkap: {{userInfo.fullname}}</span>
        <span class="mb-4">Divisi: {{userInfo.divisi}}</span>
        <span class="mb-2">History: </span>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" class="title-status">Status</th>
              <th scope="col">Tgl</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in userInfo.history" :key="index">
            <tr>
              <td>{{item.status}}</td>
              <td>{{format_date(item.createdAt)}}</td>
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
import moment from 'moment'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Detail',
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    console.log(this.$route.params)
    this.getUserInfo()
  },
  methods: {
    format_date (value) {
      if (value) { return moment(String(value)).format('DD-MM-YYYY, hh:mm:ss') }
    },
    getUserInfo () {
      const storage = JSON.parse(localStorage.getItem('user'))
      const id = this.$route.params.id
      axios.get(`${process.env.VUE_APP_SERVICE_API}/user/detail/` + id, { headers: { Authorization: `Bearer ${storage.token}` } })
        .then((res) => {
          if (res) {
            this.userInfo = res.data.data
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
thead {
  background: #c0a6ff;
}
table {
  width: 85%;
  align-content: center;
  margin-left: 80px;
}
.title-status {
  width: 50%;
}
span {
  font-style: bold;
  font-size: 20px;
}
</style>
