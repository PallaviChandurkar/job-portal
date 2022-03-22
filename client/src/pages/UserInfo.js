import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from "../component/DefaultLayout"

function UserInfo({match}) {
    const {users} = useSelector(state=>state.usersReducer)

    const user = users.find(user=>user._id == match.params.id)
    return (
        <div>
            <DefaultLayout>
                {/* {match.params.id}
                {user.firstName} */}
                {user && (
                    <div>
                        <h4><b>Personal Information</b></h4>
                        <p><b>First Name :</b>{user.firstName}</p>
                        <p><b>Last Name :</b>{user.lastName}</p>
                        <p><b>Email :</b>{user.email}</p>
                        <p><b>Mobile Number :</b>{user.mobileNumber}</p>
                        <p><b>Address :</b>{user.address}</p>

                        <hr />
                        <h4><b>Skills</b></h4>

                        {user.skills.map(skill=>{
                           return <li>{skill}</li>
                        })}
                          <hr />
                        <h4><b>Education</b></h4>

                        {user.education.map(education=>{
                           return <li>{education}</li>
                        })}
                          <hr />
                        <h4><b>Projects</b></h4>

                        {user.projects.map(project=>{
                           return <li>{project}</li>
                        })}
                         <hr />
                        <h4><b>Experience</b></h4>

                        {user.experience.map(experience=>{
                           return <li>{experience}</li>
                        })}
                    </div>
                )}
            </DefaultLayout>
        </div>
    )
}

export default UserInfo
