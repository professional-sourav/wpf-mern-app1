import { Form, Formik } from 'formik'
import React from 'react'

const AddNewSite = () => {

    const handleAddSiteSubmit = (url: any) => {
        console.log(url);        
    }

  return (
    
    <Formik
    initialValues={{ url: '' }}
    onSubmit={(values) => handleAddSiteSubmit(values)}
    >
        <Form>
            <div className='flex'>
                <div className='flex-1 w-80'>
                    <input type='text' placeholder='https://www.example.com' className='text-field-add-site' />
                </div>
                <div className='flex-1'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Site</button>
                </div>
            </div>
        </Form>
    </Formik>
  )
}

export default AddNewSite