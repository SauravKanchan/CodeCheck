<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte'
  import MDBInput from 'mdbsvelte/src/MDBInput.svelte'
  import MDBBtn from 'mdbsvelte/src/MDBBtn.svelte'

</script>
<MDBRow>
  <MDBCol md="6">
    <MDBCard>
      <div class="header pt-3 peach-gradient">
        <MDBRow class="d-flex justify-content-center">
          <h3 class="white-text mb-3 pt-3 font-weight-bold">
            Log in
          </h3>
        </MDBRow>
        <MDBRow class="mt-2 mb-3 d-flex justify-content-center">
          <a href="#!" class="fa-lg p-2 m-2 fb-ic">
            <MDBIcon fab icon="facebook-f" size="lg" class="white-text"/>
          </a>
          <a href="#!" class="fa-lg p-2 m-2 tw-ic">
            <MDBIcon fab class="fa-twitter white-text fa-lg"/>
          </a>
          <a href="#!" class="fa-lg p-2 m-2 gplus-ic">
            <MDBIcon fab class="fa-google-plus-g white-text fa-lg"/>
          </a>
        </MDBRow>
      </div>
      <MDBCardBody class="mx-4 mt-4">
        <MDBInput label="Your email" group type="text" validate/>
        <MDBInput
          label="Your password"
          group
          type="password"
          validate
          containerClass="mb-0"
        />
        <p class="font-small grey-text d-flex justify-content-end">
          Forgot
          <a
            href="#!"
            class="dark-grey-text ml-1 font-weight-bold"
          >
            Password?
          </a>
        </p>
        <MDBRow class="d-flex align-items-center mb-4 mt-5">
          <MDBCol md="5" class="d-flex align-items-start">
            <div class="text-center">
              <MDBBtn
                color="grey"
                rounded
                type="button"
                class="z-depth-1a"
              >
                Log in
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="7" class="d-flex justify-content-end">
            <p class="font-small grey-text mt-3">
              Don't have an account?
              <a
                href="#!"
                class="dark-grey-text ml-1 font-weight-bold"
              >
                Sign up
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="6">
    <MDBCard class="p-5">
      <p class="h5 text-center mb-4">Sign up</p>
      <div class="grey-text">
        <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right"/>
        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right"/>
        <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                  error="wrong" success="right"/>
        <MDBInput label="Your password" icon="lock" group type="password" validate/>
      </div>
      <div class="text-center">
        <MDBBtn color="primary">Register</MDBBtn>
      </div>
    </MDBCard>
  </MDBCol>
</MDBRow>
