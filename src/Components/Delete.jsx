import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
  return (
    <div>
        <NavBar/>
        <div classNameName="container" style={{padding:10,margin:50}}>
            <h1 style={{ color: "green", marginBottom: 50,  }}>
            Delete
            </h1>
        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Admission Number:</label>
                        <input type="text" className="form-control" />
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Delete