<template>
  <div class="auth">
    <!-- <div class="bg"></div> -->
    <div class="title-info">
      <img src="../../assets/logo.png" alt="">
      <h2 class="title">失物招领系统</h2>
    </div>

    <div class="form" v-if="regForm.showLogin">
      <div>
      <span class="color-blue" @click="login(true)">登入</span>&nbsp &nbsp &nbsp &nbsp<span @click="login(false)">注册</span></div>
      <input type="text" placeholder="用户名" class="input1" v-model="regForm.account"><br/>
      <input type="password" placeholder="密码" class="input1" v-model="regForm.password"><br/>
      <input type="button" class="input2">
    </div>

    <div class="form" v-else>
      <div>
      <span @click="login(true)">登入</span>&nbsp &nbsp &nbsp &nbsp<span @click="login(false)" class="color-blue">注册</span></div>
      <input type="text" placeholder="注册用户名" class="input1" v-model="regForm.account"><br/>
      <input type="password" placeholder="注册密码" class="input1" v-model="regForm.password"><br/>
      <input type="button" class="input2">
    </div>
  </div>
</template>
<script src="./index.jsx"></script>

<style lang="scss" scpoed>
  @import './index.scss';
</style>
