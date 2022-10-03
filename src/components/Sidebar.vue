<template>
     <v-navigation-drawer v-model="drawer" app>
      <v-sheet
        color="#e77e22"
        class="pa-4"
      >
      <div class="text-center">
          <v-avatar
            class="mb-4"
            color="#eea564"
            size="64"
          ></v-avatar>
  
          <h2 class="white--text">Admin Panel</h2>
      </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Sidebar", 
        data(){
            return {
                links: [
                    ["mdi-home-analytics", "Dashboard"],
                    ["mdi-account", "Profile"],
                    ["mdi-list-box", "Top List"],
                    ["mdi-email", "Message"],
                    ["mdi-help-circle", "Help"],
                    ["mdi-cog", "Settings"],
                ],
            }
        }
    }
</script>

<style scoped>

</style>