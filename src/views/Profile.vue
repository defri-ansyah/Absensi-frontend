<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar />
      <main class="d-flex justify-content-between">
        <form @submit.prevent="editProfile">
          <div class="form-group">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control shadow-none"
              v-model = "fullname"
            />
          </div>
          <div class="form-group">
            <label>Divisi</label>
            <input
              type="text"
              class="form-control shadow-none"
              v-model = "divisi"
            />
          </div>
        <button type="submit" class="align-middle">Edit</button>
        </form>
      </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Profile',
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
      userInfo: {},
      fullname: '',
      divisi: ''
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      const storage = JSON.parse(localStorage.getItem('user'))
      axios.get(`${process.env.VUE_APP_SERVICE_API}/user/detail/` + storage.id)
        .then((res) => {
          if (res) {
            this.userInfo = res.data.data
            this.fullname = res.data.data.fullname
            this.divisi = res.data.data.divisi
            console.log(res.data.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editProfile () {
      const storage = JSON.parse(localStorage.getItem('user'))
      axios.patch(`${process.env.VUE_APP_SERVICE_API}/user/edit-profile`, { fullname: this.fullname, divisi: this.divisi }, { headers: { Authorization: `Bearer ${storage.token}` } })
        .then((res) => {
          if (res) {
            this.getUserInfo()
          }
          Swal.fire('Success', res.data.messages, 'success')
        })
        .catch((err) => {
          console.log(err)
          Swal.fire('Oops...', err.response.data.messages, 'error')
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
  overflow: scroll;
  align-items: center;
}
section {
  margin-bottom: 30px;
}
form {
  width: 90%;
}
button {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  width: 20%;
  height: 50px;
  background: #c0a6ff;
  border-radius: 70px;
}
label {
  padding-bottom: 10px;
}
input:focus {
  outline: 1px dashed #c0a6ff;
}
</style>
