<template>
    <div>
        <div class="form-group row">
            <label class="col-sm-3  control-label col-form-label"><li>Text Controller</li></label>
            <div class="col-sm-3">
                <input v-model="message1" placeholder="Enter Here">
            </div>
            <div class="col-sm-3">
                <p>Message is: {{ message1 }}</p>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-3  control-label col-form-label"><li>Disabled Text Controller</li></label>
            <div class="col-sm-3">
                <input v-model="message2" placeholder="Enter Here" :disabled="true">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'TextControl',
    data(){
        return {
            message1:"",
            message2:"Edit Not Possible"
        }
    }
}
</script>