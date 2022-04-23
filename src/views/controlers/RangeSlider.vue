<!-- npm i ion-rangeslider -->

<template>
  <div class="custom-range">
    <input type="text" id="rsId" class="rangeSlider" value="0" />
  </div>
</template>

<script>
import $ from "jquery";
import { eventBus } from "../../main";
export default {
  name: "RangeSilder",

  data() {
    return {
      min: 0,
      max: 60,
      from: 0,
    };
  },
  props: {
    rsId: String,
    minVal:Number,
    maxVal:Number,
    stepsVal:Number
  },
  mounted() {
    $("#rsId").ionRangeSlider({
      min: this.minVal,
      max: this.maxVal,
      from: this.from,
      step: this.stepsVal,
      grid: true,
      grid_num: 0,
      grid_snap: true,
      onChange: function (data) {
        $("#rsId").prop("value", data.from);
        console.log(data.from);
        eventBus.$emit("rangeSliderValue", data);
      },
    });
  },
};

export function updateSlider(rgValue, uMin=null, uMax=null, uStep) {
  var instance = $("#rsId").data("ionRangeSlider");
  if (instance != undefined) {
    if (uMin != null && uMax != null){
        instance.update({
          from: rgValue,
          min:uMin,
          max:uMax,
          step:uStep
        });
    }
    else{
        instance.update({
          from: rgValue,
        });
    }
  }
}
</script>
