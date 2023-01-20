import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



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
//     console.log(plan.name)
// })

export default function ModalForm({planDetails}) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    {/* <Modal show={show} onHide={handleClose} animation={false}> */}
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className='modal-box col-md-6'>
                        <label>Plan Name</label>
                        <input type="text" value={planDetails.name} onChange={() => setValue('planname', planDetails.name)}  {...register("planname", {required: true, pattern: /^\S+@\S+$/i})} readOnly/>
                        {/* {planDetails.name} */}
                    </div>
                    <div className='modal-box col-md-6'>
                        <label>Plan Price</label>
                        <input type="text" value={planDetails.price} onChange={() => setValue('planprice', planDetails.price)}  {...register("planprice", {required: true, pattern: /^\S+@\S+$/i})} readOnly/>
                        {/* {planDetails.price} */}
                    </div>
                    <div className='modal-box col-md-12'>
                        <label>Enter Card NO</label><br></br>
                        <input type="text"  {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                    </div>
                </div>
                <div className='expire-btn'>
                    <input type="text" placeholder="Expiry" {...register("Expiry", {required: true, minLength: 6, maxLength: 12})} />
                    <input type="text" placeholder="CVV"  max="3" {...register("CVV", {required: true , min:3 })} />
                </div>
                {/* <input type="submit" /> */}
            </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
            <Button variant="primary" onClick={handleClose}>
                Make Payment
            </Button>
        </Modal.Footer>
      {/* </Modal> */}
    </>
  );
}