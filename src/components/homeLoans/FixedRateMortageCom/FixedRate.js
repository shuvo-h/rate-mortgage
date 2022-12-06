import { Link } from 'gatsby';
import React from 'react';

const FixedRate = () => {
    return (
        <section>
            <h1>Fixed rate mortgages</h1>
            <p>Fixed rate mortgages are the most common types of home loans you’ll come across, delivering an appealing mix of affordability, simplicity and convenience. Understanding how they work is essential if you want to accurately compare your mortgage options and find the best fit before <Link to='https://apply.guaranteedrate.com/apply/express-loan?AdTrk=%7Cgnr%7Cguaranteedrate%7C%7C%7C%7C%7C%7C%7C%7Cdirect%7C%7C%7C%7C%7C'>applying for a home loan</Link>.</p>
            <div>
            <Link to='/mortgage-rates/assumptions/30-year_fixed_conforming'>View Today's 30-Year Fixed Mortgage Rates</Link>
            <Link to='/mortgage-rates/assumptions/15-year_fixed_conforming'>View Today's 15-Year Fixed Mortgage Rates</Link>
            </div>
        </section>
    );
};

export default FixedRate;