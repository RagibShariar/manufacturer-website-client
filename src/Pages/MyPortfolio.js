import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='w-3/4 mx-auto my-40 px-20'>
            <div className='flex p-2  '>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Name</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <h1 className='text-2xl font-bold uppercase'>Syed Ragib Shariar</h1>
            </div>
            <div className='flex p-2 '>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Email</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <h1 className='text-2xl font-bold '>srragib@gmail.com</h1>
            </div>
            <div className='flex p-2 '>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Education</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <h1 className='text-2xl font-bold '>BSc. Computer Science & Engineering, BRAC UNIVERSITY</h1>
            </div>
            <div className='flex p-2 mb-4'>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Skills</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <div>
            <kbd class="kbd mx-1">HTML</kbd>
            <kbd class="kbd mx-1">CSS</kbd>
            <kbd class="kbd mx-1">Bootstrap</kbd>
            <kbd class="kbd mx-1">Tailwind</kbd>
            <kbd class="kbd mx-1">JavaScript</kbd>
            <kbd class="kbd mx-1">React JS</kbd>
            <kbd class="kbd mx-1">Node JS</kbd>
            <kbd class="kbd mx-1">MongoDB</kbd>
            </div>
            </div>

            <div className='flex p-2 '>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Project 1</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <a href='https://warehouse-management-94241.web.app/' target="_blank" className='link text-2xl font-bold '>Ragib Perfume Inventory</a>
            </div>
            <div className='flex p-2 '>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Project 2</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <a href='https://ragib-photography-firebase.web.app/' target="_blank" className='link text-2xl font-bold '>Ragib Photography</a>
            </div>
            <div className='flex p-2 '>
            <h1 className='w-40  text-2xl font-semibold uppercase'>Project 3</h1>
            <h1 className='w-10 text-2xl font-bold uppercase'>:</h1>
            <a href='https://perfume-arena.netlify.app/' target='_blank' className=' link text-2xl font-bold '>Perfume Arena</a>
            </div>
        </div>
    );
};

export default MyPortfolio;