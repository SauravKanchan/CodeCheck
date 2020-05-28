<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBBreadcrumb from 'mdbsvelte/src/MDBBreadcrumb.svelte';
  import MDBBreadcrumbItem from 'mdbsvelte/src/MDBBreadcrumbItem.svelte';
  import MDBFormInline from 'mdbsvelte/src/MDBFormInline.svelte';
  import MDBBtn from 'mdbsvelte/src/MDBBtn.svelte';
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte';

</script>
<MDBCard class="mb-5">
  <MDBCardBody id="breadcrumb" class="d-flex align-items-center justify-content-between">
    <MDBBreadcrumb>
      <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
      <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
    </MDBBreadcrumb>
    <MDBFormInline class="md-form m-0">
      <input class="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
      <MDBBtn size="sm" color="primary" class="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
    </MDBFormInline>
  </MDBCardBody>
</MDBCard>
