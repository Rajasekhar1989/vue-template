<template>
  <div>
    <date-picker
      v-model="value1"
      :default-value="new Date()"
      format="MMM DD, YYYY hh:mm A"
      :clearable="false"
      :editable="false"
      :show-time-panel="showTimePanel"
       type="datetime"
      @close="handleRangeClose" 
      v-on:change="updateDate"      
    >
      <template v-slot:footer>
        <button class="mx-btn mx-btn-text" @click="toggleTimePanel">
          {{ showTimePanel ? "Select date" : "Select time" }}
        </button>
      </template>
    </date-picker>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "DateTimePicker",
  data() {
    return {
      value1: new Date(),      
      showTimePanel: false,
      showTimeRangePanel: false,
    };
  },
  methods: {
    toggleTimePanel() {
      this.showTimePanel = !this.showTimePanel;
    },
    toggleTimeRangePanel() {
      this.showTimeRangePanel = !this.showTimeRangePanel;
    },
    handleOpenChange() {
      this.showTimePanel = false;
    },
    handleRangeClose() {
      this.showTimeRangePanel = false;
    },
    updateDate(){
      this.customFormatter(this.value1);
    },
    customFormatter(date) {
      return moment(date).format('MMM DD, YYYY hh:mm A');
    },
  },
};
</script>
