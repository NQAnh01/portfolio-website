<template>
  <div class="layout">
    <Header />
    <div class="content">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
/* Layout chung của trang */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Chiều cao tối thiểu bằng chiều cao cửa sổ */
  margin: 0; /* Đảm bảo không có margin không mong muốn */
  padding: 0; /* Đảm bảo không có padding ngoài ý muốn */
}

/* Header và Footer */
header {
  flex: 0 1 auto; /* Chiều cao cố định cho header */
  width: 100%;
}

footer {
  flex: 0 1 auto; /* Chiều cao cố định cho footer */
  width: 100%;
  margin-top: auto; /* Đẩy footer xuống dưới cùng */
}

/* Phần nội dung chính */
.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto; /* Cho phép cuộn nếu nội dung quá dài */
}

/* Xử lý thanh cuộn */
body,
html {
  margin: 0; /* Loại bỏ margin của body và html */
  padding: 0; /* Loại bỏ padding của body và html */
  height: 100%; /* Đảm bảo chiều cao là 100% */

  overflow-x: hidden; /* Ẩn thanh cuộn ngang nếu có */
}
</style>
