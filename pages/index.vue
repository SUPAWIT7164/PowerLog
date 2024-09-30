<template>
  <div>
    <h3>PM2210</h3>
    <!-- ให้รีเฟรสข้อมูลมลทุกๆหนึ่งนาที -->
    <table v-if="dataLog">
      <tbody>
        <tr v-for="(log, index) in dataLog" :key="index">
          <td colspan="3">Phase 1</td>
        </tr>
        <tr v-for="(log, index) in dataLog" :key="`phase1-values-${index}`">
          <td>{{ log.kw1 }} kW</td>
          <td>{{ log.amp1 }} A</td>
          <td>{{ log.volt1 }} V</td>
        </tr>
        <br />
        <tr v-for="(log, index) in dataLog" :key="`phase2-${index}`">
          <td colspan="3">Phase 2</td>
        </tr>
        <tr v-for="(log, index) in dataLog" :key="`phase2-values-${index}`">
          <td>{{ log.kw2 }} kW</td>
          <td>{{ log.amp2 }} A</td>
          <td>{{ log.volt2 }} V</td>
        </tr>
        <br />
        <tr v-for="(log, index) in dataLog" :key="`phase3-${index}`">
          <td colspan="3">Phase 3</td>
        </tr>
        <tr v-for="(log, index) in dataLog" :key="`phase3-values-${index}`">
          <td>{{ log.kw3 }} kW</td>
          <td>{{ log.amp3 }} A</td>
          <td>{{ log.volt3 }} V</td>
        </tr>
        <tr>
          <td colspan="3">
            Last data update: {{ dataLog[dataLog.length - 1].time_interval }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      dataLog: null,
    }
  },
  mounted() {
    this.getPowerLog()
  },
  methods: {
    ...mapActions({
      selectLog: 'selectApi/selectLog',
    }),
    async getPowerLog() {
      this.dataLog = await this.selectLog()
      console.log(this.dataLog, 'Success')
    },
  },
}
</script>


