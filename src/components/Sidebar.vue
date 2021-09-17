<template>
  <aside class="d-flex flex-column">
    <div>
      <router-link to="/home" class="d-flex m-5">
        <img src="../assets/grid.svg" alt="grid" />
        <p>Dashboard</p>
      </router-link>
      <router-link to="/profile" class="d-flex m-5">
        <img src="../assets/user.svg" alt="profile" />
        <p>Profile</p>
      </router-link>
    </div>
    <router-link to="/" class="d-flex m-5">
      <img src="../assets/log-out.svg" alt="logout" />
      <p>Logout</p>
    </router-link>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
aside {
  background: #FFFFFF;
  width: 15%;
  height: 83vh;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  justify-content: space-between;
}
p {
  color: #232323;
  padding: 10px;
}
p:hover {
  color: #c0a6ff;
}
.d-flex {
  text-decoration: none;
}
</style>
