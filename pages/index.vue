<template>
  <Tutorial />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      dataLog: null
    }
  },
  mounted() {
    this.getPowerLog()
  },
  methods: {
    ...mapActions({
      selectLog: "selectApi/selectLog"
    }),
    async getPowerLog() {
      this.dataLog = await this.selectLog()
      console.log(this.dataLog, "GG");
      
    }
  },
}
</script>
