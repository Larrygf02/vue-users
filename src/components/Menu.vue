<template>
    <v-row>
        <v-col cols="2" sm="4">
            <v-card class="mx-auto" width="300">
            <v-list>
                <v-list-item link to="/welcome">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item link to="/users">
                    <v-list-item-icon>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item>

                <v-list-item link to="/products">
                    <v-list-item-icon>
                        <v-icon>mdi-shopping</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Products</v-list-item-title>
                </v-list-item>

                <!-- <v-list-group prepend-icon="mdi-account-circle" value="true">
                    <template v-slot:activator>
                        <v-list-item-title>Users</v-list-item-title>
                    </template>

                    <v-list-group no-action sub-group value="true">
                        <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>Admin</v-list-item-title>
                        </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="(admin, i) in admins"
                            :key="i"
                            link
                        >
                        <v-list-item-title v-text="admin[0]"></v-list-item-title>
                        <v-list-item-icon>
                            <v-icon v-text="admin[1]"></v-icon>
                        </v-list-item-icon>
                        </v-list-item>
                    </v-list-group>

                    <v-list-group sub-group no-action>
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Actions</v-list-item-title>
                            </v-list-item-content>
                        </template>
                    </v-list-group>
                </v-list-group> -->
            </v-list>
            </v-card>
        </v-col>
        <v-col cols="10" sm="8">
            <slot name="content"></slot>
        </v-col>
    </v-row>
</template>

<script>
  export default {
    data: () => ({
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
      align: 'center'
    }),
  }
</script>