<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardHeader from 'mdbsvelte/src/MDBCardHeader.svelte';
  import MDBListGroup from 'mdbsvelte/src/MDBListGroup.svelte';
  import MDBListGroupItem from 'mdbsvelte/src/MDBListGroupItem.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBIcon from 'mdbsvelte/src/MDBIcon.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'
  import MDBBadge from 'mdbsvelte/src/MDBBadge.svelte'

  import Bar from 'svelte-chartjs/src/Bar.svelte';
  import Pie from 'svelte-chartjs/src/Pie.svelte';

  const dataBar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '#1',
        data: [12, 39, 3, 50, 2, 32, 84],
        backgroundColor: 'rgba(245, 74, 85, 0.5)',
        borderWidth: 1
      }, {
        label: '#2',
        data: [56, 24, 5, 16, 45, 24, 8],
        backgroundColor: 'rgba(90, 173, 246, 0.5)',
        borderWidth: 1
      }, {
        label: '#3',
        data: [12, 25, 54, 3, 15, 44, 3],
        backgroundColor: 'rgba(245, 192, 50, 0.5)',
        borderWidth: 1
      }
    ]
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        barPercentage: 1,
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  const dataPie = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [300, 50, 100, 40, 120, 24, 52],
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
      }
    ]
  }

</script>
<MDBRow class="mb-4">
  <MDBCol md="8"class="mb-4">
    <MDBCard class="mb-4">
      <MDBCardBody>
        <Bar data={dataBar} height={500} options={barChartOptions} />
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
  <MDBCol md="4" class="mb-4">
    <MDBCard class="mb-4">
      <MDBCardHeader>Pie chart</MDBCardHeader>
      <MDBCardBody>
        <Pie data={dataPie} height={300} options={{responsive: true}} />
      </MDBCardBody>
    </MDBCard>
    <MDBCard class="mb-4">
      <MDBCardBody>
        <MDBListGroup class="list-group-flush">
          <MDBListGroupItem>
            Sales
            <MDBBadge color="success-color" pill class="float-right">
              22%
              <MDBIcon icon="arrow-up" class="ml-1"/>
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            Traffic
            <MDBBadge color="danger-color" pill class="float-right">
              5%
              <MDBIcon icon="arrow-down" class="ml-1"/>
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            Orders
            <MDBBadge color="primary-color" pill class="float-right">
              14
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            Issues
            <MDBBadge color="primary-color" pill class="float-right">
              123
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            Messages
            <MDBBadge color="primary-color" pill class="float-right">
              8
            </MDBBadge>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
