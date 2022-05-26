import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-16 lg:w-2/4 mx-auto text-justify'>
            <h1 className='my-3 text-xl font-bold'>1. How will you improve the performance of a React Application?</h1>
            <p className='text-base mb-2'>Optimizing performance in a React application: </p>
            <ul  className="list-disc mb-8">
                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React.</li>
            </ul>



            <h1 className='my-3 text-xl font-bold'>2. What are the different ways to manage a state in a React application?</h1>
            <p className='text-base mb-2'>There are four main types of state you need to properly manage in your React apps:</p>
            <ul className="list-disc mb-8">
                <li>Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
            </ul>


            <h1 className='my-3 text-xl font-bold'>3. How does prototypical inheritance work?</h1>
            <p className='text-base mb-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>


            <h1 className='my-3 text-xl font-bold'>4. what is a unit test? why should write unit tests?</h1>
            <p className='text-base mb-2'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
            <ul className="list-disc mb-8">
                <li>decrease defects and expose them early in the development lifecycle;</li>
                <li>increase code readability;</li>
                <li>enable code reuse; and</li>
                <li>improve deployment velocity.</li>
            </ul>
            

            <h1 className='my-3 text-xl font-bold'>5. Why you do not set the state directly in React</h1>
            <p className='text-base mb-2'>One should never update the state directly because of the following reasons:</p>
            <ul className="list-disc mb-8">
                <li>If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                <li>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                <li>You will lose control of the state across all components.</li>
            </ul>

        </div>
    );
};

export default Blogs;