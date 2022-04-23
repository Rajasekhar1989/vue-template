<template>
	<div class="container-fluid">
        <h1 style="color:white">Form Controllers</h1>
		<b-form class="col-lg-3" @submit="onSubmit" @reset="onReset" >
			<b-form-group class="pb-2" id="input-group-1" label="Email address:" label-for="input-1">
				<b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
			</b-form-group>
			<b-form-group class="pb-2" id="input-group-2" label="Your Name:" label-for="input-2">
				<b-form-input  id="input-2" v-model="form.name" placeholder="Enter name" required></b-form-input>
			</b-form-group>
			<b-form-group class="pb-2" id="input-group-3" label="Food:" label-for="input-3">
				<b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
			</b-form-group>
            <b-form-group class="pb-2" label="Gender">
                <b-form-radio v-model="form.selected" name="some-radios" value="Male">Male</b-form-radio>
                <b-form-radio v-model="form.selected" name="some-radios" value="Female">Female</b-form-radio>
            </b-form-group>
			<b-form-group class="pb-2" id="input-group-4" label="Gender:">
				<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
					<b-form-checkbox value="reading">Reading</b-form-checkbox>
                    <b-form-checkbox value="coding">Coding</b-form-checkbox>
					<b-form-checkbox value="sleeping">Sleeping</b-form-checkbox>
				</b-form-checkbox-group>
			</b-form-group>
			<b-form-group>
				<div class="row">
					<div class="col-lg-6">
						<b-button type="submit" variant="primary">Submit</b-button>
					</div>
					<div class="col-lg-6">
						<b-button type="reset" variant="danger">Reset</b-button>
					</div>
				</div>
			</b-form-group>
		</b-form>   
	</div>
</template>
<script>
export default {
	name: 'FormControllers',
	data() {
		return {
			form: {
				email: '',
				name: '',
				food: null,
                selected: '',
				checked: []
			},
			foods: [{
				text: 'Select One',
				value: null
			}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
			show: true
		}
	},
	methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
                // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.selected=''
            this.form.checked = []
                // Trick to reset/clear native browser form validation state
           // this.show = false
            // this.$nextTick(() => {
            //     this.show = true
            // })
        }
	}
}
</script>