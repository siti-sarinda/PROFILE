<script setup>
defineProps(['nama', 'harga', 'gambar'])
</script>
<template>
 <div class="card">
<img :src="gambar" :alt="nama" />
 <h3>{{ nama }}</h3>
 <p>Rp {{ harga.toLocaleString('id-ID') }}</p>
 </div>
</template>
<style scoped>
.card {
 border: 1px solid #ddd;
 border-radius: 10px;
 padding: 14px;
 width: 200px;
 text-align: center;
 display: flex;
 gap: 8px;
 flex-wrap: wrap;
}
.card img {
 width: 100%;
 border-radius: 6px;
}
</style>