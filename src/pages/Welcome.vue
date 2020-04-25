<template>
    <div>
        <menu-vue>
            <template slot="content">
                <h1>Bienvenidos user {{ isLogin }}</h1>
            </template>
        </menu-vue>
    </div>
</template>
<script>
import { mapGetters } from 'vuex' 
import MenuVue from '../components/Menu.vue'

export default {
    name: 'Welcome',
    components: {
        MenuVue
    },
    computed: {
        ...mapGetters('user',['isLogin'])
    }
}
</script>