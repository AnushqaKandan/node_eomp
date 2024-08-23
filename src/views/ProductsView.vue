<template>
    <div v-if="products()">
        <CardComp>
            <template #products></template>
        </CardComp>
    </div>
    <div v-else>
        
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    components:{
        CardComp
    },
    methods: {
        getProducts(){
            this.$store.dispatch('getProducts');
        },
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.getProducts();
    }
}
</script>
<style scoped>


</style>