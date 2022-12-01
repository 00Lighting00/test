/*
・CONPASの画像の表示
・Login into CyberPort
の部分を記述する。
*/

import React from 'react';
import Image from 'next/image'; //imgタグは公式が禁止したので、これを用いる。

const SeeImage = () => {
    return (
        <div>
            <p className='conpas'>
                <Image
                    src="/conpas.png"
                    alt="CONPASの画像"
                    width={150}
                    height={50}
                />
            </p>

            <p className='Login_into_CyberPort'>Login into CyberPort</p>
        </div>
    )
}
export default SeeImage;