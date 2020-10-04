<template>
<v-app>
  <v-card  v-show="check_login" class="overflow-hidden">
  <v-app-bar
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Mail Inbox</v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <v-btn color="danger" @click="logout">Logout</v-btn>
      </v-app-bar>
      <v-sheet
      id="scrolling-techniques-5"
      class="overflow-y-auto"
      max-height="600">
      <v-container style="height: 150px;">
      </v-container>
      <v-content class="text-center ma-6">
      </v-content>
      </v-sheet>
        <v-expansion-panels v-if="subjects">
        <v-expansion-panel v-bind:key="i" v-for="i in subjects.length" >
        <v-expansion-panel-header>Subject Email: {{subjects[i]}}</v-expansion-panel-header>
        <v-expansion-panel-content>Sender : {{froms[i]}}</v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
          <Login/>
      </v-app>
</template>
<script>
import Login from "./components/Login";
//for logout
import {mapActions} from "vuex";
import { mapGetters } from "vuex";
export default {
   name: 'App',
    components: {
    Login,
  },
   data: () => ({
    items:[]
  }),
  methods: {
    ...mapActions({
      logout:"logout"
    })
    
  },
  computed:{
        ...mapGetters({
                check_login: 'get_check_login',
                subjects: 'get_subject',
                froms: 'get_from'
        })
        
        }
    };
</script>