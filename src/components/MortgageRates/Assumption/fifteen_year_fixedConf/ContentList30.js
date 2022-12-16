import React from 'react';

import { content_list, link_item} from "./index.module.css";


const ContentList30 = () => {
    return (
        <section>
            <h2>Table of contents</h2>
            <div className={content_list}>
                <a className={link_item} href='#whatAfixedRate30'>What is a 30-year fixed-rate mortgage?</a>

                <a className={link_item} href="#30YearFixedRate">30-year fixed-rate mortgages and interest</a>

                <a className={link_item} href="#diffBtwIntAndAPR">What is the difference between interest rate and APR?</a>

                <a className={link_item} href="#amortizationSche">What is an amortization schedule?</a>

                <a className={link_item} href="#fixedRateAndAjustablle">What’s the difference between fixed-rate and adjustable rate mortgages?</a>

                <a className={link_item} href="#best30YearRate">How do I get the best 30 year rate?</a>

                <a className={link_item} href="#advantage30YearData">Benefits of 30-year fixed-rate mortgages</a>

                <a className={link_item} href="#disaddOf30yearFixed">Disadvantages of 30-year fixed-rate mortgage</a>

                <a className={link_item} href="#guaranteed30RateMortage">Guaranteed Rate’s 30-Year Mortgage</a>
            </div>
        </section>
    );
};

export default ContentList30;