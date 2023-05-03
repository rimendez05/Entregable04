import React from 'react'

const UserCard = ({user, deleteUser, handleClickEdit}) => {
  return (
    <article className='p-7 bg-[#9662de] my-7 border-r-2 rounded-lg grid justify-center'>
        <div className=''>
            <img className='w-[200px] h-[200px] aspect-[3/5] object-cover mx-auto rounded-full ' src={user.image_url ? user.image_url : "/images/noProfile.jpg" } alt="No image" />
        </div>
        <div className='bg-white rounded-md text-center my-4 font-semibold text-base'>
        <h3 >{user.first_name} {user.last_name}</h3>
        <ul >
            <li>
                <h4>Correo</h4>
                <span>{user.email}</span>
            </li>

            <li>
                <h4>Cumpleaños</h4>
                <span>
                <i className='bx bx-gift'></i>
                {user.birthday}
                </span>
            </li>
        </ul> 
        </div>
    
        <div className='flex justify-evenly'>
            <button className='left-0' onClick={() => deleteUser(user.id)}>
             <i className='bx bxs-trash text-red-800 text-2xl'></i>
            </button>
            <button className='text-2xl text-blue-800 ' onClick={() => handleClickEdit(user)}>
             <i class='bx bx-pencil'></i>
            </button>
        </div>
    </article>
  )
}

export default UserCard