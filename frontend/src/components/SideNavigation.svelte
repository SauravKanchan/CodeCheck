<script>
  export let segment;
  export let isOpen = true;

  import MDBListGroup from "mdbsvelte/src/MDBListGroup.svelte";
  import MDBListGroupItem from "mdbsvelte/src/MDBListGroupItem.svelte";
  import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";
  import MDBNavLink from "mdbsvelte/src/MDBNavLink.svelte";
</script>

{#if isOpen}
  <div class="sidebar-fixed position-fixed">
    <a href="#!" class="logo-wrapper waves-effect">
      <img alt="MDB React Logo" class="img-fluid" src="mdbsvelte.png" />
    </a>
    <MDBListGroup class="list-group-flush">
      <MDBNavLink
        href="/"
        active={segment === undefined}
        activeClassName="activeClass">
        <MDBListGroupItem>
          <MDBIcon icon="chart-pie" class="mr-3" />
          <span>Dashboard</span>
        </MDBListGroupItem>
      </MDBNavLink>
      <MDBNavLink
        href="/profile"
        active={segment === 'profile'}
        activeClassName="activeClass">
        <MDBListGroupItem>
          <MDBIcon icon="user" class="mr-3" />
          <span>Profile</span>
        </MDBListGroupItem>
      </MDBNavLink>
      <MDBNavLink
        href="/tables"
        active={segment === 'tables'}
        activeClassName="activeClass">
        <MDBListGroupItem>
          <MDBIcon icon="table" class="mr-3" />
          <span>Tables</span>
        </MDBListGroupItem>
      </MDBNavLink>
      <MDBNavLink
        href="/forms"
        active={segment === 'forms'}
        activeClassName="activeClass">
        <MDBListGroupItem>
          <MDBIcon icon="file" class="mr-3" />
          <span>Forms</span>
        </MDBListGroupItem>
      </MDBNavLink>
    </MDBListGroup>
  </div>
{/if}
