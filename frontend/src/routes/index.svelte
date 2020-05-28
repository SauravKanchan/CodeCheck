<script>
  import AdminCardSection1 from '../components/sections/AdminCardSection1.svelte'
  import AdminCardSection2 from '../components/sections/AdminCardSection2.svelte'
  import BreadcrumbSection from '../components/sections/BreadcrumbSection.svelte'
  import ChartSection1 from '../components/sections/ChartSection1.svelte'
  import ChartSection2 from '../components/sections/ChartSection2.svelte'
  import TableSection from '../components/sections/TableSection.svelte'
  import ModalSection from '../components/sections/ModalSection.svelte'
  import MDBContainer from 'mdbsvelte/src/MDBContainer.svelte'
</script>
<MDBContainer fluid>
  <BreadcrumbSection />
  <AdminCardSection1 />
  <ChartSection1 />
  <TableSection />
  <ChartSection2 />
  <ModalSection />
  <AdminCardSection2 />
</MDBContainer>
