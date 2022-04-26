<template>
    <div class="row">
        <div class="col-lg-6">
            <span>Horizontal Bar Graph</span>
            <HorizontalBarGraph/>
        </div>
        <div class="col-lg-6">
            <span>Vertical Bar Graph</span>
            <VerticalBarGraph/>
        </div>
    </div>
</template>
<script>
import HorizontalBarGraph from '../views/Charts/HorizontalBarChart.vue'
import VerticalBarGraph from '../views/Charts/VerticalBarChart.vue'
export default {
    name:'Graph',
    components:{
        HorizontalBarGraph,VerticalBarGraph
    }
}
</script>