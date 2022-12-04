import { Link } from 'gatsby';
import React from 'react';

const ProcessHeader = ({banner}) => {
    return (
        <section>
            {banner.img}
            <Link to={banner.url}>{banner.button}</Link>
        </section>
    );
};

export default ProcessHeader;