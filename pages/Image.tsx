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
            <Image
                src="/conpas.png"
                alt=""
                width={300}
                height={100}
            />

            <p>Login into CyberPort</p>
        </div>
    )
}
export default SeeImage;