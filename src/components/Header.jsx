import React from 'react'

const Header = ({setIsShowForm}) => {

   const handleClickShowModal = () => {
   setIsShowForm((isShowForm) => !isShowForm)
   
  }


  return (
    <header className='flex justify-center gap-4 p-4'>
        <h1 className='text-center font-bold text-2xl'>Usuarios</h1>

        <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm rounded-md'><i className='bx bx-plus'></i> Crear nuevo usuario</button>
    </header>
  )
}

export default Header