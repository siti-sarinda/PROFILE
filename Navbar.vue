<template>
    <nav>
        <div class="judul">

            <p>
                <b>SMK YADIKA SOREANG - ONLINESHOP</b>
            </p>
            
            <p>
                <RouterLink to="/">Landing</RouterLink>|
                <RouterLink to="/about">About</RouterLink> |
                <RouterLink to="/product">Product</RouterLink> |
                <RouterLink to="/contact">Contact</RouterLink>
            </p>
        </div>
    </nav>
<br>
</template>

<style scoped>
.judul {
    display: flex;
    justify-content: space-between;

}
    
</style>