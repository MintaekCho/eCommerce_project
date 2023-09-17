import React from 'react';

export default function ProductDetails({ params }) {
    const { id } = params;
    return (
        <div>
            ProductDetails {id}
        </div>
    );
}

