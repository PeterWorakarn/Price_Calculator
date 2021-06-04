import React from 'react';
import Typing from './typed/Typing';
import avatar from './Avatar@3x.png';

export default function Header() {
    return (
        <header className="bg-brand max-w-full">
            <section className="max-w-6xl mx-auto py-4 px-2 sm:p-4">
                <div className="sm:h-32 mt-2 ml-2  sm:p-4  flex items-center">
                    <img className="w-1/6 h-1/6 sm:w-auto sm:h-auto rounded-full ring-4 ring-white mr-6 sm:mr-8" src={avatar} alt="avatar" />
                    <Typing />
                </div>
            </section>
        </header>
    )
}