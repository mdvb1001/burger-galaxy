'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <button className="font-medium py-1 my-3" onClick={goBack}>Back</button>
    );
};

export default BackButton;