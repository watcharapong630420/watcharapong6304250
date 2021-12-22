<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="2*3">
        <v-img
          alt="Vuetify Logo"
          class="d-flex align-center -6 pointer"
          contain
          src="https://i.redd.it/bkrwq5jph4w51.png"
          transition="scale-transition"
          width="1*2"
          @click="goto('/')"
        />
      </v-col>

      <v-col class="mb-4 ">
        <h1 class="display-2 font-weight-bold mb-3 ">
          Tournament Of Team Liquid
        </h1>

        
      </v-col>

      <v-col
        class="mb-5 "
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3 ">
          Present
        </h2>

        
      </v-col>

      <v-col
        class="mb-5 "
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3 ">
          By
        </h2>

        
      </v-col>

      <v-col
        class="mb-5 "
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3 ">
          6304250 Watcharapong Wongjariya
        </h2>

        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
