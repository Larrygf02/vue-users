<template>
    <h1>Bienvenidos user {{ isLogin }}</h1>
</template>
<script>
import { mapGetters } from 'vuex' 
export default {
    name: 'Welcome',
    computed: {
        ...mapGetters('user',['isLogin'])
    }
}
</script>