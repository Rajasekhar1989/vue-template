<template>
	<div>
		<div>
      <span v-if="node!=''">Selected Node: {{node}}</span>
			<tree :data="items" ref="tree" />      
    </div>
		<!-- <div>
			<router-view/> 
    </div> -->
	</div>
</template>
<script>
// import router from '../router'
export default {
	name: 'TreeView',
	data() {
		return {
      node:"",
			items: [{
				text: 'HTML'
			}, {
				text: 'CSS'
			}, {
				text: 'JavaScript',
				children: [{
					text: 'PHP'
				}, {
					text: 'Angular Js',
					children: [{
						text: 'React Js'
					}, {
						text: 'Vue Js'
					}]
				}]
			}],
		}
	},
	mounted() {
		console.log(this.$refs.tree.data);
		this.$refs.tree.$on("node:selected", (node) => {
      this.node=node.data.text;
			// if(node.data.text=="Item 3.1"){
			//   router.push('/about')
			// }
			// else{
			//   router.push('/')
			// }
			// var routName;
			// switch(node.data.text) {
			// 	case 'Item 1':
			// 		routName = "/";
			// 		break;
			// 	case 'Item 2':
			// 		routName = "/graphs";
			// 		break;
			// 	case 'Item 3':
			// 		routName = "/";
			// 		break;
			// 	case 'Item 3.1':
			// 		routName = "/graphs";
			// 		break;
			// 	default:
			// 		routName = "/";
			// }
			// router.push(routName);
			console.log(node.data.text)
		})
	}
}
</script>