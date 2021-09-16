
<template>
  <div class="container-fluid d-flex justify-content-center">
    <main class="box-auth d-flex flex-column align-items-center">
      <h1>Login</h1>
      <div class="space"></div>
      <h2 class="align-self-start">Hi, Welcome Back</h2>
      <div class="space"></div>
      <form @submit.prevent="login">
        <label for="email" class="align-self-start">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          maxlength="64"
          required
        />
        <div class="space"></div>
        <label for="password" class="align-self-start">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          minlength="8"
          maxlength="64"
          required
        />
        <div class="space"></div>
        <div class="space"></div>
        <button type="submit">Login</button>
        <div class="space"></div>
      </form>
      <div class="line-muted flex-grow-1"></div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  padding: 100px 0;
  background: #f6f6f6;
  // height: 100vh;
}
.space {
  width: 100%;
  height: 35px;
}
h1 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #C0A6FF;
  margin-bottom: 20%;
  margin-top: 50px;
}
h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #232323;
}
form {
  width: 100%;
}
label {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #848484;
  opacity: 0.75;
}
input {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  border-bottom: 1px solid #adadad;
  padding: 15px 0;
  width: 100%;
}
button {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 60px;
  background: #C0A6FF;
  border-radius: 70px;
}
button:hover {
  opacity: 0.8;
}

@media (min-height: 910px) {
  .container-fluid {
    height: 100vh;
  }
}
</style>
