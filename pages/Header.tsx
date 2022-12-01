/*
画面上部のバナー部分を記述する
*/

import React from 'react';
import Image from 'next/image';


const Header = () => {
    return (
        <div className='header'>
            <Image
                className='header_img'
                src='/conpas.png'
                alt="CONPASの画像"
                width={150}
                height={50}
            />
        </div>
    )
}

export default Header;