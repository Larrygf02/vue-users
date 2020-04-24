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
                    v-model="user"
                    :error-messages="userErrors"
                    required
                    @input="$v.user.$touch()"
                    @blur="$v.user.$touch()"
                    label="User"
                    name="user"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    v-model="pass"
                    :error-messages="passErrors"
                    required
                    @input="$v.pass.$touch()"
                    @blur="$v.pass.$touch()"
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
export default {
    name: 'Login',
    props: {
      source: String,
    },
    mixins: [validationMixin],
    validations: {
        user: { required },
        pass: { required }
    },
    data() {
        return {
            user: '',
            pass: ''
        }
    },
    methods: {
        login() {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.setUser()
                this.$router.push({ path: 'welcome'})
            }
            console.log('Login')
        },
        setUser() {
          let user = {
            user: this.user,
            login: true
          }
          this.$store.dispatch('user/setUser', user)
        }
    },
    computed: {
        userErrors() {
            const errors = []
            if (!this.$v.user.$dirty) return errors
            !this.$v.user.required && errors.push('User is required')
            return errors;
        },
        passErrors() {
            const errors = []
            if (!this.$v.pass.$dirty) return errors
            !this.$v.pass.required && errors.push('Password is required')
            return errors;
        }
    }
}
</script>