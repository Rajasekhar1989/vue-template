<template>
    <div class="form-group row">
        <label class="col-sm-3  control-label col-form-label">
            <li>Radio Button Controller</li>
        </label>
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
</template>
<script>
export default {
    name:'RadioButtonControl',
    data(){
        return{
            picked:"",
        }
    }
}
</script>