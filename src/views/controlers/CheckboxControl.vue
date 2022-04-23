<template>
    <div class="form-group row">
        <label class="col-sm-3  control-label col-form-label"><li>Checkbox Controller</li></label>
        <div class="col-sm-3">
            <input type="checkbox" id="checkbox" v-model="checked">
        </div>
        <div class="col-sm-3">
            <label for="checkbox">Checkbox Options is : {{ checked }}</label>
        </div>
    </div>
</template>
<script>
export default {
    name:'CheckboxControl',
    data(){
        return {
            checked:false,
        }
    }
}
</script>