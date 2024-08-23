<template>
    <div v-if="products()" class="mb-5">
        <CardComp>
            <template #products></template>
        </CardComp>
    </div>
    <div v-else>
        <SpinnerComp/>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  
    components:{
        CardComp,
        SpinnerComp
    },
    methods: {
        getProducts(){
            this.$store.dispatch('getProducts');
        },
        products() {
            return this.$store.state.products;
        },
        
    },
    mounted() {
      this.getProducts();
    }
}
</script>
<style scoped>


</style>