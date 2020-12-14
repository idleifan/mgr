<template>
    <div class="basic-layout">
    <div class="app-header">
        <div class="left">
            <img src="../../assets/logo.png">
            <div class="title">校园失物招领系统</div>
        </div>
        <div class="right">
            <div class="hello-msg">你好，xx</div>
            <div class="logout">退出</div>
        </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
        <div class="left">
            <app-nav />
        </div>
        <div class="right">
            <router-view />
        </div>

    </div>
    </div>
</template>

    <script src="./index.js"></script>
    <style lang="scss" scoped>
       @import './index.scss';
    </style>
