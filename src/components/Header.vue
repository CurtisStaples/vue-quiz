<template>
  <div>
    <nav class="navbar navbar-expand-lg black-background">
    <div class="d-flex flex-grow-1">
        <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
        <a class="navbar-brand on-hover">
            True To You
        </a>
        <div class="w-100 text-right">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar7">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div class="collapse navbar-collapse flex-grow-1 text-right" id="navbar">
        <ul class="navbar-nav ml-auto flex-nowrap">
          <b-nav-item-dropdown text="About" right>
          <b-dropdown-item href="#">Tab</b-dropdown-item>
          <b-dropdown-item href="#">Tab</b-dropdown-item>
        </b-nav-item-dropdown>
          <li class="nav-item" >
            <a class="nav-link on-hover">Tab</a>
          </li>
        </ul>

    </div>
</nav>

  </div>

</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
  computed:{

  },
  methods:{

  }
}
</script>


<style scoped>

a {
  color: white !important;
}

.black-text{
  color: black !important;
}
.md-toolbar + .md-toolbar {
   margin-top: 16px;
 }

.black-background{
  background-color: black !important;
}
.nav-items {
  margin-left:auto;
  margin-right:0;
  color: white;
}

.on-hover{
  cursor: pointer;
}

.white-text{
  color: white;
}

</style>
