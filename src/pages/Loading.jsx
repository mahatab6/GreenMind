import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="h-screen flex flex-col items-center justify-center text-center bg-green-50 text-green-800 p-6">
                <span className="loading loading-ring loading-xl"></span> 
            </div>            
        </div>
    );
};

export default Loading;