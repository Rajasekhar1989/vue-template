<template>
  <div class="bodyinfo">
    <split-pane :class="{ show_filter : $store.state.showFilter }" class="default_theme" style="height: 100%">
      <pane :class="{ hide_tree: $store.state.hide_tree }" class="tre_pane" size="28" min-size="2" max-size="82">
        <!-- <ul>
          <li class="nav-item">
            <a class="nav-link" href="/dashboard"> Dashboard </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/controls"> Controls </a>
          </li>    
          <li class="nav-item">
            <a class="nav-link" href="/formcontrollers"> Form Controls </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/tree"> Tree </a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="/graphs"> Charts </a>
          </li>      
        </ul> -->
        <sidebar-menu :menu="menu" />
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
  data() {
    return{
      menu: 
      [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/controls',
          title: 'Controls',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/formcontrollers',
              title: 'Form Controls',
              child: [
                {
                  href: '/graphs',
                  title: 'Charts '
                },
                {
                  href: '/tree',
                  title: 'Tree'
                },
              ]
            }
          ]
        }
      ]
    }
  }
};
</script>
