<template>
  <div class="bodyinfo">
    <split-pane :class="{ show_filter : $store.state.showFilter }" class="default_theme" style="height: 100%">
      <pane :class="{ hide_tree: $store.state.hide_tree }" class="tre_pane" size="17" min-size="2" max-size="82">
        <ul>
          <li class="nav-item">
            <a class="nav-link" href="/dashboard"> Dashboard </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/controls"> Controls </a>
          </li>    
          <li class="nav-item">
            <a class="nav-link" href="/formcontrollers"> Form Controls </a>
          </li>      
        </ul>
      </pane>
      <pane :class="{ hide_tree: $store.state.hide_tree }" class="right_pane">    
        <div class="page_container">  
          <router-view />
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
