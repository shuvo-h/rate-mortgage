import React from 'react';
import FeatureSingle from './FeatureSingle';
import MortgageSingleNews from './MortgageSingleNews';

const MortgageNews = () => {
    return (
        <section>
            <h1>MortgageNews</h1>
            <div>
                <div>
                    <h2>Articel news</h2>
                    <MortgageSingleNews />
                    <div>
                        <em>Your mortgage. Your way.</em>
                    </div>
                </div>
                <div>
                    <h2>Featured</h2>
                    <FeatureSingle />
                </div>
            </div>
        </section>
    );
};

export default MortgageNews;