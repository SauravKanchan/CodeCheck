<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'
  import MDBCardImage from 'mdbsvelte/src/MDBCardImage.svelte'
  import MDBCardTitle from 'mdbsvelte/src/MDBCardTitle.svelte'
  import MDBCardText from 'mdbsvelte/src/MDBCardText.svelte'
  import MDBBtn from 'mdbsvelte/src/MDBBtn.svelte'
  import MDBCardFooter from 'mdbsvelte/src/MDBCardFooter.svelte'
  import MDBMask from 'mdbsvelte/src/MDBMask.svelte'
  import MDBView from 'mdbsvelte/src/MDBView.svelte'

</script>
<MDBRow class="justify-content-center">
  <MDBCol sm="12" md="6" lg="3" class="mb-5">
    <MDBCard>
      <MDBCardImage class="img-fluid" src="img-1.jpg" />
      <MDBCardBody>
        <MDBCardTitle class="text-center mb-2 font-bold">Alice Mayer</MDBCardTitle>
        <MDBCardTitle sub class="text-center indigo-text mb-2 font-bold">Photographer</MDBCardTitle>
        <MDBCardText>
          <strong class="mb-2">About:</strong>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
        </MDBCardText>
        <div class="row justify-content-end pr-1">
          <MDBBtn size="sm" outline color="primary">More...</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="6" lg="9">
    <section class="text-center pb-3">
      <MDBRow class="d-flex justify-content-center">
        <MDBCol lg="6" xl="5" class="mb-3">
          <MDBCard class="d-flex mb-5">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" class="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </MDBView>
            <MDBCardBody>
              <MDBCardTitle class="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter class="links-light profile-card-footer">
                  <span class="right">
                    <a class="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" class="ml-1"/>
                    </a>
                  </span>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" xl="5" class="mb-3">
          <MDBCard class="d-flex mb-5">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" class="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </MDBView>
            <MDBCardBody>
              <MDBCardTitle class="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter class="links-light profile-card-footer">
                  <span class="right">
                    <a class="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" class="ml-1"/>
                    </a>
                  </span>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow class="d-flex justify-content-center">
        <MDBCol lg="6" xl="5" class="mb-3">
          <MDBCard class="d-flex mb-5">
            <MDBView>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" class="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </MDBView>
            <MDBCardBody>
              <MDBCardTitle class="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter class="links-light profile-card-footer">
                  <span class="right">
                    <a class="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" class="ml-1"/>
                    </a>
                  </span>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6" xl="5" class="mb-3">
          <MDBCard class="d-flex mb-5">
            <view-wrapper>
              <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" class="img-fluid"/>
              <MDBMask overlay="white-slight"/>
            </view-wrapper>
            <MDBCardBody>
              <MDBCardTitle class="font-bold mb-3">
                <strong>Project name</strong>
              </MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter class="links-light profile-card-footer">
                  <span class="right">
                    <a class="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" class="ml-1"/>
                    </a>
                  </span>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  </MDBCol>
</MDBRow>
