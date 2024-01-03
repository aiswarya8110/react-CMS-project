import React from 'react';
const Hero = ()=>{
    return (
        <div className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>Pitchfork schlitz tonx, coloring book celiac tousled succulents ascot affogato cardigan jianbing crucifix seitan. Synth man braid everyday carry try-hard pour-over keffiyeh slow-carb sriracha chillwave banjo gochujang kinfolk small batch mustache.</p>
                </div>
                <div className='img-container'>
                    <img src="https://react-vite-projects-16-contentful.netlify.app/assets/hero-d50f9f18.svg" alt="woman and the browser" className="img"/>
                </div>
            </div>
        </div>
    )
};

export default Hero;