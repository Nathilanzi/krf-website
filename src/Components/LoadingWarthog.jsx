// LoadingWarthog.jsx
import React from 'react';

const LoadingWarthog = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
            <div className="w-50 h-50 animate-running">
                <img src="/images/Warthog.gif" alt="Loading..." loading='lazy' className="object-cover" />
            </div>
            
        </div>
    );
};

export default LoadingWarthog;
