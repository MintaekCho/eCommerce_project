import React from 'react';

export default function EditProduct({ params }) {
    const { id } = params
    return (
        <div>
            EditProduct  {id}          
        </div>
    );
}

