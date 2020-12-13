<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="../../assets/logo.png" alt="">
      <h2 class="title">失物招领系统</h2>
    </div>
    <div class="form">
      <a-tabs>
      <a-tab-pane tab="登录" key="1">
        <div class="item">
          <a-input 
          size="large" 
          placeholder="账户"
          >
            <template #prefix>
               <UserOutlined />
            
            </template>
          </a-input>
          
        </div>
        <div class="item">
          <a-input size="large" placeholder="密码">
            <template #prefix>
               <LockOutlined />
            
            </template>
          </a-input>
        </div>
        <div class="item">
          <a href="#">忘记密码</a>
        </div>
        <div class="item">
          <a-button size="large" type="primary">
            登录
          </a-button>
        </div>
      </a-tab-pane>
      <a-tab-pane tab="注册" key="2">
        <div class="item">
          <a-input size="large" 
          placeholder="注册账户" 
          v-model:value="regForm.account"
         >
             <template #prefix>
               <UserOutlined />
            
            </template>
          </a-input>
        </div>
        <div class="item">
          <a-input size="large" 
          placeholder="密码" 
          v-model:value="regForm.password"
          >
                        <template #prefix>
               <LockOutlined />
            
            </template>
          </a-input>
        </div>
        <div class="item">
          <a-button @click="register"
          size="large" 
          type="primary" 
          >
            注册
          </a-button>
        </div>
      </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script src="./index.jsx"></script>

<style lang="scss" scpoed>
  @import './index.scss';
</style>
