<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="p-6 shadow overflow-hidden bg-white border-gray-200 sm:rounded-lg">
      <header>
        <h3 class="text-xl font-semibold">Initial Investment</h3>
      </header>
      <div class="mt-3 text-center">
        <span v-if="account">{{ account.initial }} USD</span>
        <span v-else>Unknown</span>
      </div>
    </div>
    <div class="p-6 shadow overflow-hidden bg-white border-gray-200 sm:rounded-lg">
      <header>
        <h3 class="text-xl font-semibold">Account Established</h3>
      </header>
      <div class="mt-3 text-center">
        <span v-if="account">{{ account.date }}</span>
        <span v-else>Unknown</span>
      </div>
    </div>
    <div class="p-6 shadow overflow-hidden bg-white border-gray-200 sm:rounded-lg">
      <header>
        <h3 class="text-xl font-semibold">Projected Value</h3>
      </header>
      <div class="mt-3 text-center">
        <span v-if="account">{{ account.projected }} USD</span>
        <span v-else>Unknown</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadlineStats",
  props: {
    account: { type: Object },
  },
}
</script>
