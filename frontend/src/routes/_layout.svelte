<script>
  import SideNavigation from "../components/SideNavigation.svelte";
  import TopNavigation from "../components/TopNavigation.svelte";
  import Footer from "../components/Footer.svelte";

  let isOpen = true;
  export let segment;
</script>

<style>
  .active {
    margin-left: 250px;
  }
  .content {
    width: 100%;
    transition: 0.5s margin cubic-bezier(0.22, 1, 0.36, 1);
  }
</style>

<div class="flexible-content">
  <TopNavigation />
  <SideNavigation {segment} {isOpen} />
  <div class="px-2 pt-4 p-md-5" id="content">
    <slot />
  </div>
  <Footer />
</div>
