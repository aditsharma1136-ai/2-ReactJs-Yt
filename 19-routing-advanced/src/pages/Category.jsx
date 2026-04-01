import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Category = () => {
    return (
        <div>

            <div className='flex justify-center gap-10 py-4'>
                <Link className='text-xl font-semibold' to='/category/men'>Men's Category</Link>
                <Link className='text-xl font-semibold' to='/category/women'>Women's Category</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Category
