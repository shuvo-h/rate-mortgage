import { Link } from 'gatsby';
import React from 'react';
import {banner_static_container} from "./banner_static.module.css";

const BannerStatic = () => {
    return (
        <section className={banner_static_container}>
            <div className='container row g-5 mx-auto py-4'>
                <div className='co-12 col-md-6'>
                    <h2>LOGO WILL COME HERE COVERING THIS ALL SPACE</h2>
                </div>
                <div className='co-12 col-md-6 text-center'>
                    <h2>Start your Homeownership Journey with Us!</h2>
                    <p>Experts offer instant home loan approvals with no obligation. Speak with a home loan expert to receive your pre-approval letter <b>TODAY</b></p>
                    <Link className='text-dark bg-white w-100 py-1 d-block rounded text-decoration-none' to=''>Get Pre-Approved Now</Link>
                </div>
            </div>
        </section>
    );
};

export default BannerStatic;