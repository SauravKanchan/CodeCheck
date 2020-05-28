<script>
  import MDBFooter from "mdbsvelte/src/MDBFooter.svelte";
  import MDBBtn from "mdbsvelte/src/MDBBtn.svelte";
  import MDBIcon from "mdbsvelte/src/MDBIcon.svelte";
</script>

<MDBFooter color="blue" class="text-center font-small darken-2 footer">
  <div class="pt-4">
    <MDBBtn outline color="white" href="#" target="_blank">
      Download MDB
      <MDBIcon icon="download" class="ml-2" />
    </MDBBtn>
    <MDBBtn outline color="white" href="#" target="_blank">
      Start free tutorial
      <MDBIcon icon="graduation-cap" class="ml-2" />
    </MDBBtn>
    <hr class="my4" />
  </div>
  <div class="pb-4">
    <MDBIcon fab icon="facebook" class="mr-3" />
    <MDBIcon fab icon="twitter" class="mr-3" />
    <MDBIcon fab icon="youtube" class="mr-3" />
    <MDBIcon fab icon="google-plus" class="mr-3" />
    <MDBIcon fab icon="dribbble" class="mr-3" />
    <MDBIcon fab icon="pinterest" class="mr-3" />
    <MDBIcon fab icon="github" class="mr-3" />
    <MDBIcon fab icon="codepen" class="mr-3" />
  </div>
  <p class="footer-copyright mb-0 py-3 text-center">
    &copy; {new Date().getFullYear()} Copyright:
    <a href="https://saurav.tech/mdbsvelte">saurav.tech/mdbsvelte</a>
  </p>
</MDBFooter>
