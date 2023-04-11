import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css'
import './customer.css';
import api from '../../api/API';

const Customer = () => {

  const [cust, setCust] = useState([]);

  const notify = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const fetchData = async () => {
    notify('Loading Customer', 2000);
    const response = await api.get('/customer');
    if (response.statusText === "OK") {
      setCust(response.data); 
    }
    toast.dismiss();
    // const response_state = await api.get('/states');
    // if (response_state.statusText === "OK") {
    //   setState(response_state.data);
    // }
  };

  useEffect(() => { 
    fetchData();

  }, [])

  const deleteCustomer = (id) => {
    notify('Deleting Customer', 2000);
    const deleteData = async () => {
      const response = await api.delete('/customer/' + id);
      if (response.statusText === "OK") {
          fetchData();
      }
    }
    deleteData();
  }

  return (

    <>
      <div className='col-9 mx-auto'>
        <div className='text-web-center'>
          <div className='col-12 d-flex my-4'>
            <h1 className="h2 mb-0 my-apk-clr txt-shdo fw-bold">Customer List</h1>
            <Link to="/new-customer" className='ms-auto align-middle mt-auto'>
              <button className='btn btn-sm bg-clr my-btn text-white' type='button'>Add New Customer</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-12">
            <table className='table tbl-list bg-clr text-white'>
              <thead>
                <tr>
                  <th>Laboratory Name</th>
                  <th>Customer Name</th>
                  <th>Customer Father Name</th>
                  <th>Address</th>
                  <th>Mobile No.</th>               
                  <th>City</th>
                  <th>State</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  (cust && cust.length > 0 && cust.map((c) => {
                    return (


                      <tr key={c.id}>
                        <td>{c.leboratory_id}</td>
                        <td>{c.customer_name}</td>
                        <td>{c.customer_father_name}</td>
                        <td>{c.address}</td>
                        <td>{c.mobile1}</td>
                        <td>{c.customer_city['city_name']}</td>
                        <td>{c.customer_state['state_name']}</td>
                        <td>
                          <div className='btn btn-info btn-sm me-1'>
                            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                          </div>
                          <Link to={"/new-customer/" + c.id} className='btn btn-warning btn-sm me-1'>
                            <FontAwesomeIcon icon="fas fa-edit" />
                          </Link>
                          <div className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={() =>deleteCustomer(c.id)} />
                          </div>
                        </td>
                      </tr>
                    )
                  }
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Customer;  