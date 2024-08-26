import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import PretendardRegular from "../font/Pretendard-ExtraBold.woff2";
import PretendardMedium from "../font/Pretendard-Medium.woff2";
import PretendardSemiBold from "../font/Pretendard-SemiBold.woff2";
import PretendardBold from "../font/Pretendard-Bold.woff2";
import PretendardExtraBold from "../font/Pretendard-ExtraBold.woff2";

const GlobalFOnt = createGlobalStyle`
    @font-face {
        font-family: "Pretendard-Regular";
        src: local("Pretendard-Regular"), url(${PretendardRegular}) format('woff2');
        font-weight: 400
    }
    @font-face {
        font-family: "Pretendard-Medium";
        src: local("Pretendard-Medium"), url(${PretendardMedium}) format('woff2');
        font-weight: 500
    }
    @font-face {
        font-family: "Pretendard-SemiBold";
        src: local("Pretendard-SemiBold"), url(${PretendardSemiBold}) format('woff2');
        font-weight: 600
    }
    @font-face {
        font-family: "Pretendard-Bold";
        src: local("Pretendard-Bold"), url(${PretendardBold}) format('woff2');
        font-weight: 700
    }
    @font-face {
        font-family: "Pretendard-ExtraBold";
        src: local("Pretendard-ExtraBold"), url(${PretendardRegular}) format('woff2');
        font-weight: 800
    }
`   
