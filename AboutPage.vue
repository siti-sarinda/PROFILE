<template>
  <div class="landing-page">
    <h1 style="font-size: 20px;">SELAMAT DATANG DI ONLINESOP KAMI</h1>
    <p>Belanja mudah, sekolah senang.</p>
    <button class="btn-grad">Click to Shop</button>
  </div>
  <main>
      <h1>Cerita</h1>
      <p>Onlineshop ini di kelola oleh siswa SMK YADIKA SOREANG jurusan PPLG, dengan tujuan untuk memberikan pengalaman belanja online yang terbaik bagi pelanggan kami,semoga bisa berbelanja dengan nyaman dan aman.</p>
  </main>
    </template>
    <style scoped>
    .landing-page {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5rem;
        text-align: center;
        background-color: #4091ee;
        width: 100%;
        height: 100px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

     .btn-grad {
  background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA 51%, #77A1D3 100%);
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  outline: none;
  border: none;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>