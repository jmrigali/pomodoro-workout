<template>
  <div class="about">
    <h1>This is Server Information</h1>
    <h2>{{ info.data }}</h2>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        info: ''
      }
    },
    mounted() {
      console.log('in mounted for about')
      if (this.$store.state.user) {
        console.log('user?', this.$store.state.user)
        const jwt = this.$store.state.user.getSignInUserSession().getIdToken().getJwtToken()

        const config = {
          headers: {
            authorization: jwt
          }
        }
        axios
          .get('https://1lk2sy3981.execute-api.us-west-2.amazonaws.com/v1/workouts', config)
          .then((val) => {
            console.log('value', val)
            this.info = val
          })
          .catch((err) => {
            console.log('Error', err)
          })
      }
    }
  }
</script>
