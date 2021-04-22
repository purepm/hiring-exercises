<template>
  <section class="sign-in relative py-20 bg-white">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px; transform: translateZ(0px)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
          <Form @submit="login">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="email">Email</label>
              <Field
                type="email"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
                placeholder="Email"
                name="email"
                label="Email"
                v-model="form.email"
                rules="email|required"
              />
              <ErrorMessage class="text-red-400" name="email" />
            </div>
            <div class="relative w-full mb-3">
              <label class="block uppercase text-gray-700 text-xs font-bold mb-2" for="password">Password</label>
              <Field
                type="password"
                class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow w-full"
                placeholder="Password"
                name="password"
                label="Password"
                v-model="form.password"
                rules="required"
              />
              <ErrorMessage class="text-red-400" name="password" />
            </div>
            <div class="relative w-full mb-3">
              <button
                type="submit"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-blue-200 hover:bg-blue-400"
              >
                Log in
              </button>
            </div>
          </Form>
        </div>
        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div class="md:pr-12">
            <h3 class="text-3xl text-grey-600 font-semibold">Sign In</h3>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">Sign in with your credentials here.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate"
import { required, email } from "@vee-validate/rules"
import { defineRule } from "vee-validate"

defineRule("required", required)
defineRule("email", email)

export default {
  name: "SignIn",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    login: async function () {
      try {
        await this.$store.dispatch("auth/login", this.form)
        this.$router.push("dashboard")
      } catch (e) {
        console.log("login failed")
      }
    },
  },
}
</script>
