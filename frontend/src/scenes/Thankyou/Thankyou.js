import React from "react";
import { Link } from "react-router-dom";
import '../../App';
import { useSelector } from "react-redux";
const ThankYou = () => {
    const userData = useSelector(state => state.user);
    return (
        <div>
        <section className="py-10 mt-16">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="w-full lg:w-3/4 text-center py-5">
                        <div className="thank__you">
                            <span className="text-4xl text-green-500 mb-4"><i className="ri-checkbox-circle-line"></i></span>
                            <h1 className="mb-3 font-semibold text-3xl">Thank You</h1>
                            <h3 className="mb-4 text-xl">Your event is booked.</h3>
                            { userData.email ?
                    <Link to='/dashboard' className='text-violet-900 hover:text-violet-800 hover:underline py-6 font-semibold'>
                         Return Home?
                    </Link>
                             : 
                    <Link to='/' className='text-violet-900 hover:text-violet-800 hover:underline py-6 font-semibold'>
                         Return  Home?
                    </Link>
            }
                        </div>
                    </div>
                </div>
                </div>
                
            </section>
             </div>
    );
}
export default ThankYou;