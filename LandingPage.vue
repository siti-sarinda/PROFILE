<template>
    <main>
    <div class="judul">
        <h1>Selamat Datang di Onlineshop Kami</h1>
        <p>Belanja mudah, sekolah senang.</p>
        <button class="btn-grad">Click to Shop</button>
    </div>

    <div class="container">

        <div class="landingPage1">
            <b>💰</b>
            <h1>harga murah</h1>
            <p>Belanja mudah, sekolah senang.</p>
        </div>
        
        <div class="landingPage1">
            <b>🤝</b>
            <h1>pelayanan terbaik</h1>
            <p>melayani dengan sepenuh hati</p>
        </div>
        
        <div class="landingPage1">
            <b>🙆‍♀️</b>
            <h1>produk berkualitas</h1>
            <p>produk yang kami jual berkualitas</p>
        </div>
    </div>
        
    </main>
</template>

<style scoped>
    .judul {
        width: 100%;
        height: 200px;
        background-color: #5798e2;
        text-align: center;
        padding-top: 2rem;
        color: white;
    }
    
    .container {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 10px;
    }
    .landingPage1 {
    background-color: rgb(121, 190, 255);
    height: 10rem;
    width: 20rem;
    border-radius: 10px;
    text-align: center;
    padding-top: 40px;
    color:#fff;
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