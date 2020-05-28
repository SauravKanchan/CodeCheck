<script>
  import MDBCard from 'mdbsvelte/src/MDBCard.svelte';
  import MDBCardHeader from 'mdbsvelte/src/MDBCardHeader.svelte';
  import MDBCardBody from 'mdbsvelte/src/MDBCardBody.svelte';
  import MDBRow from 'mdbsvelte/src/MDBRow.svelte'
  import MDBCol from 'mdbsvelte/src/MDBCol.svelte'
  import MDBBtn from 'mdbsvelte/src/MDBBtn.svelte'
  import MDBModal from 'mdbsvelte/src/MDBModal.svelte'
  import MDBModalBody from 'mdbsvelte/src/MDBModalBody.svelte'
  import MDBModalHeader from 'mdbsvelte/src/MDBModalHeader.svelte'

  let state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false
  };

  function toggle(nr) {
    let modalName = 'modal' + nr;
    state[modalName] = !state[modalName]
  }

</script>
<MDBCard class="mb-5">
  <MDBCardHeader>Modals</MDBCardHeader>
  <MDBCardBody>
    <h4 class="mb-5 mt-4 dark-grey-text text-center font-bold"><strong>Position & Sizes</strong></h4>
    <div class="text-center mb-5">
      <p class="lead">Click buttons below to launch modals demo</p>
    </div>
    <MDBRow>
      <MDBCol md="3" class="mb-3">
        <h5 class="text-center mb-3">Frame modal</h5>
        <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="frame position"/>
        <div class="text-center">
          <h5 class="my-3">Position</h5>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(1)}>Top</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(2)}>Bottom</MDBBtn>
          <MDBModal toggle={()=>toggle(1)} isOpen={state.modal1} position="top" frame>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(1)}>Close</MDBBtn>
              <MDBBtn color="primary" on:click={()=>toggle(1)}>Save changes</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(2)} isOpen={state.modal2} position="bottom" frame>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(2)}>Close</MDBBtn>
              <MDBBtn color="primary" on:click={()=>toggle(2)}>Save changes</MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </div>
      </MDBCol>
      <MDBCol md="3" class="mb-3">
        <h5 class="text-center mb-3">Side modal</h5>
        <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="frame position"/>
        <div class="text-center">
          <h5 class="my-3">Position</h5>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(3)}>Top Right</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(4)}>Top Left</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(5)}>Bottom Right</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(6)}>Bottom Left</MDBBtn>
          <MDBModal toggle={()=>toggle(3)} isOpen={state.modal3} side position="top-right">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(3)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(4)} isOpen={state.modal4} side position="top-left">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(4)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(5)} isOpen={state.modal5} side position="bottom-right">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(5)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(6)} isOpen={state.modal6} side position="bottom-left">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(6)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </div>
      </MDBCol>
      <MDBCol md="3" class="mb-3">
        <h5 class="text-center mb-3">Central modal</h5>
        <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal2.jpg" alt="frame position"/>
        <div class="text-center">
          <h5 class="my-3">Size</h5>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(7)}>Small</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(8)}>Medium</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(9)}>Large</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(10)}>Fluid</MDBBtn>
          <MDBModal toggle={()=>toggle(7)} isOpen={state.modal7} size="sm">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(7)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(8)} isOpen={state.modal8} >
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(8)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(9)} isOpen={state.modal9} size="lg">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(9)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(10)} isOpen={state.modal10} size="fluid">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(10)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </div>
      </MDBCol>
      <MDBCol md="3" class="mb-3">
        <h5 class="text-center mb-3">Fluid modal</h5>
        <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal1.jpg" alt="frame position"/>
        <div class="text-center">
          <h5 class="my-3">Position</h5>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(11)}>Right</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(12)}>Left</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(13)}>Top</MDBBtn>
          <MDBBtn color="primary" size="sm" on:click={()=>toggle(14)}>Bottom</MDBBtn>
          <MDBModal toggle={()=>toggle(11)} isOpen={state.modal11} fullHeight position="right">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(11)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(12)} isOpen={state.modal12} fullHeight position="left">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(12)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(13)} isOpen={state.modal13} fullHeight position="top">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(13)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
          <MDBModal toggle={()=>toggle(14)} isOpen={state.modal14} fullHeight position="bottom">
            <MDBModalHeader>Modal Title</MDBModalHeader>
            <MDBModalBody class="text-center">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
              <MDBBtn color="secondary" on:click={()=>toggle(14)}>Close</MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>
</MDBCard>
