<template>
  <div class="home">
    <div v-if="isPending" class="d-flex justify-content-center align-items-center h-100">
        <b-spinner style="width: 5rem; height: 5rem;" label="Loading..."></b-spinner>
    </div>
    <div v-else-if="!users.length" class="text-center mt-5" >
         <h2>
             {{ message }}
         </h2>
    </div>
    <div v-else>
      <b-container fluid="sm" class="mt-5">
        <b-row >
         <b-col md="3" v-for="user in users" :key="user.id">
           <UserCard :user="user" />
         </b-col>
       </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from '@/components/Card/Card.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapGetters([ 'isPending', 'users', 'message' ])
  },

  components: {
    UserCard
  }
}
</script>

<style>
    .home{
        position: relative;
        height: calc(100vh - 60px);
    }
</style>
