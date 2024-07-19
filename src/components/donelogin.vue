<template>
  <div class="login-page">
    <div class="login-container">
      <div class="background-image"></div>
        <div class="login-page">
          <h2 class="login-title">Ой...мы еще работаем над этим разделом</h2>
          <img class="img-plug" src="../assets/kit.jpeg">
      </div>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.input-wrapper {
  position: relative;
}
.img-plug {
  position: absolute;
  top: 50%;
  width: 40%;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
}
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/main.png');
  background-size: cover;
  z-index: -1;
}

.login-container {
  background-color: #fff;
  color: #000;
  width: 795px;
  height: 700px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  margin-top: 100px;
}

.login-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
}

.google-login-btn {
  width: 528px;
  height: 72px;
  font-size: 24px;
  margin-bottom: 40px;
  border-radius: 40px;
  border: 1px solid #000000;
  background-color: #fff;
  color: #000;
}

.divider-line {
  display: flex;
  align-items: center;
  font-size: 24px;
  width: 67%;
  margin-bottom: 24px;
}

.divider-line::before,
.divider-line::after {
  content: '';
  flex-grow: 1;
  height: 1px;
  background-color: #666666;
  opacity: 25%;
}

.divider-text {
  padding: 0 16px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-label {
  justify-content: start;
  font-size: 16px;
  margin-bottom: 8px;
  text-align: left;
  color: #666;
}

.form-input {
  width: 528px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #ccc;
  margin-bottom: 24px;
  font-size: 16px;
  padding-left: 10px;
  background-color: #fff;
  color: #000;
}


.forgot-password {
  text-align: right;
  text-decoration-line: underline;
  margin-bottom: 24px;
}

.forgot-password a {
  color: #111111;
}

.login-btn {
  height: 64px;
  border-radius: 40px;
  background-color: #ccc;
  border: 1px solid #ccc;
  color: #fff;
  font-size: 22px;
}

.login-btn.active {
  background-color: #000;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: -20px;
  margin-bottom: 25px;
}

</style>
