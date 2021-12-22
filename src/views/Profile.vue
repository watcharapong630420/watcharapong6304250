<template>
<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://i.imgur.com/n8Dlmn1.png"
      height="200px"


    >
    <v-card-title class="orange--text mt-16">
            <v-avatar size="56">
              <img
                alt="user"
                :src=user.photoURL
              >
            </v-avatar>

              <div> {{user.displayName}} </div>
              <v-row cols="12" class="d-flex justify-center align-center">
              <div> {{user.email}} </div></v-row>

          </v-card-title>
    </v-img>

    <v-card-title>
      <v-btn
        color=" lighten-2"
        text
      >
        Tournament Of Team Liquid
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      <v-btn
        color=" lighten-2"
        text
      >
        BY Watcharapong
      </v-btn>
    </v-card-subtitle>

    

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template> 

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default {
    data: () => ({
        user: {}
    }),

    methods: {
        authStateChanged() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties 
                    // https://firebase.google.com/docs/reference/js/firebase.User 
                    console.log(user);
                    this.user = user;
                    // ... 
                } else {
                    
                    // User is signed out 
                    // ... 
                }
            });
        },


    },
    watch: {},
    computed: {},
    mounted() {
        this.authStateChanged();
    },
};
</script>

<style>
</style>