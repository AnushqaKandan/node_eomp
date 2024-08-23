<template>
    <div class="container-fluid retro-container">
        <div class="row">
            <h2 class="display-2 retro-heading">Product Details</h2>
        </div>
        <div class="row justify-content-center my-2" v-if="product">
            <Card>
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid retro-image" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold retro-title">{{ product.prodName }}</h5>
                    <p class="lead">
                        {{ product.prodDescription }}
                    </p>
                    <p class="lead"><span class="text-dark fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <p class="lead"><span class="text-dark fw-bold">Quantity</span>: {{ product.quantity }}</p>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<!-- <template>
    <div class="container-fluid retro-container">
        <div class="row">
            <h2 class="display-2 retro-heading">Product Details</h2>
        </div>
        <div class="row justify-content-center my-2" v-if="product">
            <Card>
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid retro-image" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold retro-title">{{ product.prodName }}</h5>
                    <p class="lead">
                        {{ product.prodDescription }}
                    </p>
                    <p class="lead"><span class="text-dark fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <p class="lead"><span class="text-dark fw-bold">Quantity</span>: {{ product.quantity }}</p>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template> -->
<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(() => store.state.product)
onMounted(() => {
    store.dispatch('gethProduct', route.params.id)
})
</script>
<style scoped>
.retro-container {
    background-color: #001F3F;
    color: #FFFFFF;
    min-height: 100vh;
    padding: 20px;
}
.retro-heading {
    font-size: 5.5em;
    font-family: 'VT323', monospace;
    margin: 0;
    color: #5690CA;
    text-shadow: 0 0 5px #001F3F, 0 0 10px #DAE4ED;
    animation: flicker 3.5s infinite;
}
.retro-image {
    border: 2px solid #0074D9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
.retro-title {
    color: #0D2D3A;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
}
@keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}
</style>