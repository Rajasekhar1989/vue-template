<template>
    <div class="container-fluid">
        <h1>Dashboard</h1>
        <div class="row">
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label"><li>Text Controller</li></label>
                <div class="col-sm-3">
                    <input v-model="message" placeholder="Enter Here">
                </div>
                <div class="col-sm-3">
                    <p>Message is: {{ message }}</p>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label">
                    <li>Spin Cotroller</li>
                </label>
                <div class="col-sm-3">
                    <input type="number" min="1" max="10" step="1" v-model="spincontrol" @paste.prevent />
                </div>
                 <div class="col-sm-3">
                    <p>Number is: {{ spincontrol }}</p>
                </div>
                <div class="col-sm-3">
                    <span>Note: MinValue=1 & MaxValue=10</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label"><li>Radio Button Controller</li></label>
                <div class="col-sm-3">
                    <input type="radio" id="one" value="One" v-model="picked">
                    <label for="one">One</label>
                    <br>
                    <input type="radio" id="two" value="Two" v-model="picked">
                    <label for="two">Two</label>
                </div>
                <div class="col-sm-3">
                    <span>Picked Radio Button is: {{ picked }}</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label"><li>Checkbox Controller</li></label>
                <div class="col-sm-3">
                    <input type="checkbox" id="checkbox" v-model="checked">
                </div>
                <div class="col-sm-3">
                    <label for="checkbox">Checkbox Options is : {{ checked }}</label>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label"><li>Dropdown Controller</li></label>             
                <div class="col-sm-3">
                    <select v-model="selected">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div> 
                <div class="col-sm-3">
                    <span>Selected: {{ selected }}</span>
                </div>               
            </div>
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
                    <ToggleButton v-on:change="triggerEvent" :sync="true" :labels="{checked: 'ON', unchecked: 'OFF'}" :value="active" :color="{checked: '#7DCE94', unchecked: '#ced4da'}" :width="70" :height="25" />
                </div>
                <div class="col-sm-3">
                    <span>Toggle Switch Value is: {{active}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {eventBus} from '../main'
import RangeSlider from '../components/RangeSlider.vue'
import { updateSlider } from "../components/RangeSlider.vue";
export default {
    name:'Dashboard',
    data(){
        return {
            message:"",
            spincontrol:1,
            checked:false,
            selected:"",
            picked:"",
            sliderValue:"30",
            active:false,
        }
    },
    mounted(){
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
    },
    components:{
        RangeSlider
    }
}
</script>