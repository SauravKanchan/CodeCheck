<script>
  import MDBNavbar from "mdbsvelte/src/MDBNavbar.svelte";
  import MDBNavbarBrand from "mdbsvelte/src/MDBNavbarBrand.svelte";
  import MDBNavbarNav from "mdbsvelte/src/MDBNavbarNav.svelte";
  import MDBNavbarToggler from "mdbsvelte/src/MDBNavbarToggler.svelte";
  import MDBCollapse from "mdbsvelte/src/MDBCollapse.svelte";
  import MDBNavItem from "mdbsvelte/src/MDBNavItem.svelte";
  import MDBNavLink from "mdbsvelte/src/MDBNavLink.svelte";
  import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";

  let collapse = false;
  function toggle() {
    collapse = !collapse
  }

  function handleUpdate(event) {
    collapse = event.detail.isOpen;
  }

</script>

<MDBNavbar class="flexible-navbar" light expand="md">
  <MDBNavbarBrand href="/">
    <strong>MDB</strong>
  </MDBNavbarBrand>
  <MDBNavbarToggler on:click = { toggle } />
  <MDBCollapse isOpen = { collapse } navbar expand="md" on:update={handleUpdate}>
    <MDBNavbarNav left>
      <MDBNavItem active>
        <MDBNavLink to="#">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <a rel="noopener noreferrer" class="nav-link Ripple-parent" href="https://saurav.tech/mdbsvelte" target="_blank">About MDB</a>
      </MDBNavItem>
      <MDBNavItem>
        <a rel="noopener noreferrer" class="nav-link Ripple-parent" href="https://saurav.tech/mdbsvelte" target="_blank">Free download</a>
      </MDBNavItem>
      <MDBNavItem>
        <a rel="noopener noreferrer"  class="nav-link Ripple-parent" href="https://saurav.tech/mdbsvelte" target="_blank">Free tutorials</a>
      </MDBNavItem>
    </MDBNavbarNav>
    <MDBNavbarNav right>
      <MDBNavItem>
        <a class="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
      </MDBNavItem>
      <MDBNavItem>
        <a class="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
      </MDBNavItem>
      <MDBNavItem>
        <a class="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/SauravKanchan/mdbsvelte-dashboard" target="_blank"><MDBIcon fab icon="github" class="mr-2"/>MDB GitHub</a>
      </MDBNavItem>
      <MDBNavItem>
        <a class="border border-light rounded mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://github.com/SauravKanchan/mdbsvelte" target="_blank"><MDBIcon fab icon="github" class="mr-2"/>Go Pro</a>
      </MDBNavItem>
    </MDBNavbarNav>
  </MDBCollapse>
</MDBNavbar>
