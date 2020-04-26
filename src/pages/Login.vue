<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    :error-messages="userErrors"
                    required
                    @input="$v.username.$touch()"
                    @blur="$v.username.$touch()"
                    label="User"
                    name="user"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    :error-messages="passErrors"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Login',
    props: {
      source: String,
    },
    mixins: [validationMixin],
    validations: {
        username: { required },
        password: { required }
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        ...mapActions('user',['setUser']),
        login() {
            let user = {
              username: this.username,
              password: this.password
            }
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.setUser(user)
                this.$router.push({ path: 'welcome'})
            }
            console.log('Login')
        },
    },
    computed: {
        ...mapGetters('user',['isLogin']),
        userErrors() {
            const errors = []
            if (!this.$v.username.$dirty) return errors
            !this.$v.username.required && errors.push('User is required')
            return errors;
        },
        passErrors() {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('Password is required')
            return errors;
        }
    }
}
</script>