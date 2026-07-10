import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewStudents = () => {
    const [data,changeData]= useState([
    {
    name: "Akshara",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10",
    admissionNo: 345,
    course: "MCA"
     },
      {
    name: "John",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10",
    admissionNo: 235,
    course: "CS"
     },
     {
    name: "Jack",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10",
    admissionNo: 456,
    course: "EEE"
     },
       {
    name: "pushpa",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73OboNq8YpolvhWur1kpvkaggtHmHEzhY7RPohICuOA&s=10",
    admissionNo: 230,
    course: "MCA"
     }


       
    ])
  return (
    <div>
        <NavBar/>
        <div className="container" style={{padding:10,margin:50}}>
            <h1 style={{ color: "green", marginBottom: 50,  }}>
            ViewStudent
            </h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6">

                              <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Admission No</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((value, index) => {
                  return (
                  <tr>
                    <td>
                      <img
                        src={value.avatar}
                        alt={value.name}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>{value.name}</td>
                    <td>{value.admissionNo}</td>
                    <td>{value.course}</td>
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                )
              })}
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