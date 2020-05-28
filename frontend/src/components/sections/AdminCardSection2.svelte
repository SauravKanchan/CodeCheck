<script>
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte'
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte'
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte'

</script>
<MDBRow class="mb-4">
  <MDBCol xl="3" md="6" class="mb-3">
    <MDBCard color="primary-color" class="classic-admin-card">
      <MDBCardBody>
        <div class="float-right">
          <MDBIcon far icon="money-bill-alt"/>
        </div>
        <p class="white-text">SALES</p>
        <h4><strong>$2000</strong></h4>
      </MDBCardBody>
      <div class="progress">
        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
      </div>
      <MDBCardBody>
        <p>Better than last week (25%)</p>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol xl="3" md="6" class="mb-3">
    <MDBCard color="warning-color" class="classic-admin-card">
      <MDBCardBody>
        <div class="float-right">
          <MDBIcon icon="chart-line"/>
        </div>
        <p class="white-text">SUBSCRIPTIONS</p>
        <h4><strong>200</strong></h4>
      </MDBCardBody>
      <div class="progress">
        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
      </div>
      <MDBCardBody>
        <p>Worse than last week (25%)</p>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol xl="3" md="6" class="mb-3">
    <MDBCard color="primary-color" class="classic-admin-card">
      <MDBCardBody>
        <div class="float-right">
          <MDBIcon icon="chart-pie"/>
        </div>
        <p class="white-text">TRAFFIC</p>
        <h4><strong>20000</strong></h4>
      </MDBCardBody>
      <div class="progress">
        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="progress-bar bg grey darken-3" role="progressbar" style={{width: "75%"}}></div>
      </div>
      <MDBCardBody>
        <p>Better than last week (75%)</p>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol xl="3" md="6" class="mb-3">
    <MDBCard color="red accent-2" class="classic-admin-card">
      <MDBCardBody>
        <div class="float-right">
          <MDBIcon icon="chart-bar"/>
        </div>
        <p class="white-text">ORGANIC TRAFFIC</p>
        <h4><strong>2000</strong></h4>
      </MDBCardBody>
      <div class="progress">
        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
      </div>
      <MDBCardBody>
        <p>Better than last week (75%)</p>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
