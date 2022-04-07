<template>
  <div class="bodyinfo">
    <split-pane :class="{ show_filter : $store.state.showFilter }" class="default-theme" style="height: 100%">
      <pane :class="{ hide_tree: $store.state.hide_tree }" class="tre_pane" size="17" min-size="2" max-size="82">
          <!-- Side Bar -->
          <p>SideBar</p>
      </pane>
      <pane :class="{ hide_tree: $store.state.hide_tree }" class="right_pane">    
        <div class="page_container">     
          <!-- Rounitng  Root -->
          <p>WelCome</p>
        </div>
      </pane>
    </split-pane>
  </div>
</template>

<script>
export default {
  name: "Body",
};
</script>
