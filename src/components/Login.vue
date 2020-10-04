<template>
  <v-app>
    <v-content v-show="check_login_inverse">
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login Page</v-card-title>
        <v-card-text>
          <v-text-field v-model="login_account.email" 
          label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field  v-model="login_account.password"
          label="Password" 
          prepend-icon="mdi-lock"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="info" @click="login(login_account)">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
export default {
    name: 'Login',
    components: {

    },
    data: () => ({
        login_account:{
            email:'',
            password:''
            }
        }),
    computed:{
        ...mapGetters({
            check_login_inverse: 'get_check_login_inverse'
        })
    },
    methods:{
        ...mapActions({
            login : "login"
        })
    }
}
</script>