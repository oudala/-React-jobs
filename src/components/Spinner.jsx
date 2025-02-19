import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Spinner({ loading }) {
    return (
        <div>
            <ClipLoader color="#36d7b7" loading={loading} cssOverride={{ display: 'block', margin: '100px auto ' }} size={150} />
        </div>
    )
}

export default Spinner