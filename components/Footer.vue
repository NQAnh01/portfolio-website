<template>
  <footer>
    <div class="container-footer">
      <p>&copy; 2024 - KTL</p>
      <div class="button-chat">
        <button>Đặt lịch</button>
        <button>Gọi điện</button>
        <button>Zalo</button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #cecece;
  color: white;
  padding: 1rem;
  text-align: center;
}
.container-footer {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}
button {
  margin: 0.5rem;
}
.button-chat {
  display: flex;
  justify-content: space-around;
  position: absolute;
}
</style>
