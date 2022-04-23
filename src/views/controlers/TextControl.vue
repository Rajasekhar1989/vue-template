<template>
    <div class="form-group row">
        <label class="col-sm-3  control-label col-form-label"><li>Text Controller</li></label>
        <div class="col-sm-3">
            <input v-model="message" placeholder="Enter Here">
        </div>
        <div class="col-sm-3">
            <p>Message is: {{ message }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'TextControl',
    data(){
        return {
            message:"",
        }
    }
}
</script>