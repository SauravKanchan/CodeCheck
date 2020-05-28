<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardHeader from 'mdbsvelte/src/MDBCardHeader.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'

  import Line from 'svelte-chartjs/src/Line.svelte';
  import Radar from 'svelte-chartjs/src/Radar.svelte';
  import Doughnut from 'svelte-chartjs/src/Doughnut.svelte';

  const dataLine = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const dataRadar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '#1',
        backgroundColor: 'rgba(245, 74, 85, 0.5)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: '#2',
        backgroundColor: 'rgba(90, 173, 246, 0.5)',
        data: [12, 42, 121, 56, 24, 12, 2]
      },
      {
        label: '#3',
        backgroundColor: 'rgba(245, 192, 50, 0.5)',
        data: [2, 123, 154, 76, 54, 23, 5]
      }
    ]
  };

  const dataDoughnut = {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [{
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }]
  };
</script>
<MDBRow class="mb-4">
  <MDBCol md="12" lg="4" class="mb-4">
    <MDBCard class="mb-4">
      <MDBCardHeader>Line chart</MDBCardHeader>
      <MDBCardBody>
        <Line data={dataLine} options={{responsive: true }} />
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="12" lg="4" class="mb-4">
    <MDBCard class="mb-4">
      <MDBCardHeader>Radar chart</MDBCardHeader>
      <MDBCardBody>
        <Radar data={dataRadar}  height={300} options={{responsive: true }} />
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="12" lg="4" class="mb-4">
    <MDBCard class="mb-4">
      <MDBCardHeader>Doughnut chart</MDBCardHeader>
      <MDBCardBody >
        <Doughnut data={dataDoughnut}  height={300} options={{responsive: true }} />
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
