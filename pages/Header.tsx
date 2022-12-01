/*
画面上部のバナー部分を記述する
*/

import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <Image src='/conpas.png'
            alt="メモ：ヘッダー用画像"
            width={150}
            height={50}
        />
    )
}

export default Header;