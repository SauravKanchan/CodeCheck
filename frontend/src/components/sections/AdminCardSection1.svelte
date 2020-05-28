<script>
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte'
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte'
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte'
  import MDBCardText from 'mdbsvelte/src/MDBCardText.svelte'

</script>
<MDBRow class="mb-4">
  <MDBCol xl="3" md="6" class="mb-r">
    <MDBCard class="cascading-admin-card">
      <div class="admin-up">
        <MDBIcon fas icon="money-bill-alt" class="primary-color"/>
        <div class="data">
          <p>SALES</p>
          <h4>
            <strong>$2000</strong>
          </h4>
        </div>
      </div>
      <MDBCardBody>
        <div class="progress">
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
               style="width: 25%"></div>
        </div>
        <MDBCardText>Better than last week (25%)</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol xl="3" md="6" class="mb-r">
    <MDBCard class="cascading-admin-card">
      <div class="admin-up">
        <MDBIcon fas icon="chart-line" class="warning-color"/>
        <div class="data">
          <p>SUBSCRIPTIONS</p>
          <h4>
            <strong>200</strong>
          </h4>
        </div>
      </div>
      <MDBCardBody>
        <div class="progress">
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey" role="progressbar"
               style="width: 25%"></div>
        </div>
        <MDBCardText>Worse than last week (25%)</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol xl="3" md="6" class="mb-r">
    <MDBCard class="cascading-admin-card">
      <div class="admin-up">
        <MDBIcon fas icon="chart-pie" class="light-blue lighten-1"/>
        <div class="data">
          <p>TRAFFIC</p>
          <h4>
            <strong>20000</strong>
          </h4>
        </div>
      </div>
      <MDBCardBody>
        <div class="progress">
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar grey darken-2" role="progressbar"
               style="width: 75%"></div>
        </div>
        <MDBCardText>Worse than last week (75%)</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol xl="3" md="6" class="mb-r">
    <MDBCard class="cascading-admin-card">
      <div class="admin-up">
        <MDBIcon fas icon="chart-bar" class="red accent-2"/>
        <div class="data">
          <p>ORGANIC TRAFFIC</p>
          <h4>
            <strong>2000</strong>
          </h4>
        </div>
      </div>
      <MDBCardBody>
        <div class="progress">
          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
               style="width: 25%"></div>
        </div>
        <MDBCardText>Better than last week (25%)</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
