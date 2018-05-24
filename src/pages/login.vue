<template>
  <q-page class="flex background">
    <div class="col">
      <div class="col justify-center">
        <h1 class="q-display-4 text-weight-light text-white text-center q-mb-sm">λ</h1>
        <h6 class="q-display-1 text-weight-thin text-white text-center q-mt-sm">TRAQXION</h6>
      </div>
      <div class="q-py-md q-px-lg">
        <q-field
          icon="email"
          :error="$v.user.username.$error"
          error-label="We need a valid email"
        >
          <q-input dark class="text-white"  v-model="user.username" placeholder="Email" @blur="$v.user.username.$touch" :error="$v.user.username.$error" @keyup.enter="signIn" />
        </q-field>
      </div>
      <div class="q-py-md q-px-lg">
        <q-field
          icon="lock"
          :error="$v.user.password.$error"
          error-label="Please fill in your password"
        >
          <q-input dark class="text-white" type="password" v-model="user.password" placeholder="Password" @blur="$v.user.password.$touch" :error="$v.user.password.$error" @keyup.enter="signIn" />
        </q-field>
      </div>
      <div class="q-py-md q-px-lg">
        <q-btn
          text-color="black"
          flat
          class="block full-width q-py-md"
          style="background-color: rgba(255,255,255,0.7)"
          @click="signIn"
        >
          Login
        </q-btn>
        <q-btn
          flat
          text-color="white"
          class="full-width text-weight-thin"
          >
          Forgot your password?
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import Crypto from 'crypto'
import { required, email } from 'vuelidate/lib/validators'

const hash = Crypto.createHash('sha1')

export default {
  name: 'PageLogin',
  data () {
    let hashed = this.hashEmail('zj.lai21@gmail.com')
    console.log(hashed)
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  validations: {
    user: {
      username: { required, email },
      password: { required }
    }
  },
  methods: {
    hashEmail (email) {
      return hash.update(email).digest('hex')
    },
    signIn () {
      this.$v.user.$touch()

      if (this.$v.user.$error) {
        this.$q.notify('Please review fields again')
        return
      }
      this.$auth.signIn(this.user.username, this.user.password)
        .then(user => {
          this.$router.push('schedule')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.background {
  background-image: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.75) ),url(/assets/login_bg_6.jpg);
  background-size: cover;
  background-position: center;
}
</style>
