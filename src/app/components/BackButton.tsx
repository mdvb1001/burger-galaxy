'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton: React.FC = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <button onClick={goBack}>Back</button>
    );
};

export default BackButton;