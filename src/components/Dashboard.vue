<template>
    <div class="container-fluid">
        <h1>Dashboard</h1>
        <div class="row">
            <div class="form-group row">
                <label class="col-sm-3  control-label col-form-label"><li>Spin Cotroller</li></label>
                <div class="col-sm-3">
                    <input type="number" min="1" max="10" step="1" v-model="spincontrol" @paste.prevent />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Dashboard',
    data(){
        return {
            spincontrol:0,
        }
    }
}
</script>