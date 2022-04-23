<template>
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
</template>
<script>
export default {
    name:'SpinControl',
    data(){
        return {
            spincontrol:1,
        }
    }
}
</script>