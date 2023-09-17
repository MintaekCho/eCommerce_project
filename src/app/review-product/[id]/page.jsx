import React from 'react';

export default function ReviewProduct({ params }) {
    const { id } = params
    return (
        <div>
            ReviewProduct {id}
        </div>
    );
}

