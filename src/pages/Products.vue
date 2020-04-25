<template>
    <div>
        <menu-vue>
            <template slot="content">
                <products-vue></products-vue>
            </template>
        </menu-vue>
    </div>
</template>
<script>
import MenuVue from '../components/Menu.vue'
import ProductsVue from '../components/products/Products.vue'

export default {
    name: 'Users',
    components: {
        MenuVue,
        ProductsVue
    }
}
</script>