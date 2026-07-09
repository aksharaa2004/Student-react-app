import React from 'react'
import NavBar from './NavBar'

const ViewStudents = () => {
  return (
    <div>
        <NavBar/>
        <div classNameName="container" style={{padding:10,margin:50}}>
            <h1 style={{ color: "green", marginBottom: 50,  }}>
            ViewStudent
            </h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6">

                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">SI NO</th>
                                <th scope="col">NAME</th>
                                <th scope="col">ADMISSION NO.</th>
                                <th scope="col">CLASS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Akshara</td>
                                <td>345</td>
                                <td>MCA</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Archana</td>
                                <td>456</td>
                                <td>CS</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>John</td>
                                <td>309</td>
                                <td>IT</td>
                                </tr>
                                <tr>
                                <th scope="row">4</th>
                                <td>sara</td>
                                <td>329</td>
                                <td>EEE</td>
                                </tr>

                            </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default ViewStudents