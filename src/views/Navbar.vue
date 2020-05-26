<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Exam Analysis
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link to="/">Anasayfa</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/import-exam">Sınav Oluştur</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/import-result">Sonuçları Yükle</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>