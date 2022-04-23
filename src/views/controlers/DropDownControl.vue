<template>
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
</template>
<script>
export default {
    name:'DropDownControl',
    data(){
        return {
            selected:"",
        }
    }
}
</script>