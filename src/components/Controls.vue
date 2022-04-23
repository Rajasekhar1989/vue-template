<template>
    <div class="container-fluid">
        <h1 style="color:white">Controllers</h1>
        <div class="row">
            <TextControl/>
            <SpinControl/>
            <RadioButtonControl/>
            <Checkbox/>
            <Dropdown/>
            <div class="form-group row align-items-center">
                <label class="col-sm-3 control-label col-form-label pr-2"><li>Range Slider</li></label>
                <div class="col-sm-3" style="padding-bottom:45px;">
                    <RangeSlider :rsId="'rangeSliderid1'" :minVal="10" :maxVal="50" :stepsVal="1" />
                </div>
                <div class="col-sm-3">
                    <span>Range Slider Value is:{{sliderValue}}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label"><li>Toggle Switch</li></label>
                <div class="col-sm-3">
                    <ToggleButton v-on:change="triggerEvent" :sync="true" :labels="{checked: 'ON', unchecked: 'OFF'}" :value="active" :color="{checked: '#7DCE94', unchecked: 'gray'}" :width="70" :height="25" />
                </div>
                <div class="col-sm-3">
                    <span>Toggle Switch Value is: {{active}}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 control-label col-form-label"><li>Date Time Picker</li></label>
                <div class="col-sm-3 pr-0">
                    <DateTimePicker :dateValue="dateValue" ref="commcSysDateAndTime" />
                </div>
                <div class="col-sm-3">
                    <p>{{dateValue}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {eventBus} from '../main'
import TextControl from '../views/controlers/TextControl.vue'
import RangeSlider,{ updateSlider } from '../views/controlers/RangeSlider.vue'
import SpinControl from '../views/controlers/SpinControl.vue'
import RadioButtonControl from '../views/controlers/RadioButtonControl.vue'
import Checkbox from '../views/controlers/CheckboxControl.vue'
import Dropdown from '../views/controlers/DropDownControl.vue'
import DateTimePicker from '../views/controlers/DateTimePicker.vue'

export default {
    name:'Controls',
    data(){
        return {
            sliderValue:"30",
            active:false,
            dateValue:""
        }
    },
    components:{
        TextControl,SpinControl,RadioButtonControl,Checkbox,Dropdown,RangeSlider,DateTimePicker
    },
    mounted(){
        this.dateValue=new Date();
        console.log(this.$refs.commcSysDateAndTime.value1);
        // console.log(this.$refs.commcSysDateAndTime.customFormatter(this.$refs.commcSysDateAndTime.value1));
        updateSlider(this.sliderValue);
        eventBus.$on("rangeSliderValue", (event) => {
        this.getSliderValue(event);
        });        
    },
    destroyed(){
        eventBus.$off("rangeSliderValue");
    },
    methods:{
        getSliderValue(event) {
        // console.log("Range Slider Value:" + event.from);
        this.sliderValue = event.from;
        },
        triggerEvent(swtCtrl) {
            this.active = swtCtrl.value;
        },
        setDate(){
            var dVal=this.$refs.commcSysDateAndTime.customFormatter(this.$refs.commcSysDateAndTime.value1);
            console.log("CHECKing: "+dVal );
        }
    },    
}
</script>
