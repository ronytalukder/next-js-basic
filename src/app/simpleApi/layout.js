import ApiHeader from '@/components/ApiHeader';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <ApiHeader/>
            { children }
        </div>
    );
};

export default layout;