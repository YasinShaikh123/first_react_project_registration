// import React from 'react';
import React, { useState } from 'react';
// import Selectmodle from './Selectmodle';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from './Modalform';



const plan = [
    {
        name: 'Plan A',
        price: '$ 999'
    },
    {
        name: 'Plan B',
        price: '$ 1999'
    },
    {
        name: 'Plan C',
        price: 'S2999'
    },

]
plan.map((plan) => {
    console.log(plan)
})
function Payment() {
    const [show, setShow] = useState(false);
    const [planDetails, setPlanDetails] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (plan) => {
        setShow(true)
        setPlanDetails(plan)
    };


    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        console.log('true');
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        console.log('false');
        setModalIsOpen(false)
    }

    // const myList = plan.map((plan) => 
    //     <>
    //         <div className='col-md-4'>
    //             <div className='paln-box'>
    //                 <h4>{plan.name}</h4>
    //                 <h5>{plan.price}</h5>
    //                 <Button variant="primary" onClick={handleShow} >Select</Button>
    //                 {/* <Button variant="primary" onClick={setModalIsOpenToFalse}>Select</Button> */}
    //                 {/* <Modal isOpen={modalIsOpen}> */}
    //                 <Modal show={show} onHide={handleClose} animation={false}>
    //                     {/* <button onClick={handleClose}>x</button> */}
    //                     <ModalForm  name={plan.name} price={plan.name}/>
    //                 </Modal>
    //             </div>
    //         </div>    
    //     </>
    // )
  return (
    <div className='plan'>
        <div className='row'>
            {
                 plan.map((plan) => 
                 <>
                     <div className='col-md-4'>
                         <div className='paln-box'>
                             <h4>{plan.name}</h4>
                             <h5>{plan.price}</h5>
                             <Button variant="primary" onClick={() => handleShow(plan)} >Select</Button>
                         </div>
                     </div>    
                 </>
             )
            }
                 <Modal show={show} onHide={handleClose} animation={false}>
                                 <ModalForm planDetails={planDetails}/>
                             </Modal>
        </div>
        <div className='candidate payment-date'>
            <h2>Instructions for Candidate</h2>
            <ul>
                <li>User will need to make the payment for their profile <br></br>using the payment options above.</li>
                <li>On selecting Select Button user will be redirected<br></br>to payments page.</li>
            </ul>
        </div>
    </div>
  )
}

export default Payment
