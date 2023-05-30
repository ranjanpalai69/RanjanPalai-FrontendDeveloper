import React from 'react';
import heroJPG from '../utils/spacex-hero.jpg';
import heroWebp from '../utils/spacex-hero.webp';

const HeroBanner = () => (
    <section>
        <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <picture>
                {/* rendering webp first for fast loading of image */}
                <source srcSet={heroWebp} type="image/webp" />
                <img
                    style={{height: '472px', width: '100%', objectFit: 'cover'}}
                    src={heroJPG}
                    alt="SpaceX hero banner"
                />
            </picture>
            <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Welcome to SpaceX Capsules Database.
            </h1>
        </div>
    </section>
);

export default HeroBanner;
