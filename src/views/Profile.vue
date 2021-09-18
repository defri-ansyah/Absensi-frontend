<template>
  <div class="container-fluid">
    <section class="d-flex">
      <Sidebar />
      <main class="d-flex justify-content-between">
        <form>
          <div class="form-group">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control shadow-none"
            />
          </div>
          <div class="form-group">
            <label>Divisi</label>
            <input
              type="text"
              class="form-control shadow-none"
            />
          </div>
        </form>
        <button type="submit" class="align-middle">Edit</button>
      </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Profile',
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
