// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Modalform from './Modalform';

// const plan = [
//     {
//         name: 'plan A',
//         price: '999'
//     },
//     {
//         name: 'plan B',
//         price: '999'
//     },
//     {
//         name: 'plan C',
//         price: '999'
//     },

// ]

// plan.map((plan) => {
//     console.log(plan)
// })

// function Selectmodle() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const myList = plan.map((plan) => 
//     <>
//         <div className='col-md-4'>
//             <div className='paln-box'>
//                 <h4>{plan.name}</h4>
//                 <h5>{plan.price}</h5>
//                 <Button variant="primary" onClick={handleShow} >Select</Button>
//             </div>
//         </div>    
//     </>
//   )

//   return (
//     <>
//     {myList}
//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Modalform value=""/>
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button> */}
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Selectmodle
