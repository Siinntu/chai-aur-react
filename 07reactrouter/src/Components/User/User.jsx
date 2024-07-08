import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {Userid} = useParams()
    return (
        <div>
            User: {Userid}
        </div>
    );
}

export default User;
