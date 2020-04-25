<template>
    <div>
        <menu-vue>
            <template slot="content">
                <users-vue></users-vue>
            </template>
        </menu-vue>
    </div>
</template>
<script>
import MenuVue from '../components/Menu.vue'
import UsersVue from '../components/users/Users.vue'

export default {
    name: 'Users',
    components: {
        MenuVue,
        UsersVue
    }
}
</script>