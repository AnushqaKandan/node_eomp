<template>
    <div class="container mt-5">
        
       <template #products>
        <CardComp/>
       </template>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    components:{
        CardComp
    }
}
</script>
<style scoped>
    
</style>