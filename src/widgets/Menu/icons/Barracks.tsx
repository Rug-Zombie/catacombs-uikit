import React from "react";
import Svg from "../../../components/Svg/Svg";
import {SvgProps} from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 195.2 124.98" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="88.5" y="78.5" width="17.34" height="28.89"/>
            <rect x="0.5" y="110.5" width="194.2" height="13.98"/>
            <path d="M111.05,5.43l67,39a21.44,21.44,0,0,1,11,19v46h-17v-41c0-5-3-9-7-12l-58-33c-4-3-9-3-14,0l-58,33c-4,3-7,7-7,12v41h-17v-46a21.44,21.44,0,0,1,11-19l23-14v-14h0c-1,0-2,0-2-1v-2a3.49,3.49,0,0,1,2-1h13l1,1v2a1,1,0,0,1-1,1h-1v7l32-18A21.67,21.67,0,0,1,111.05,5.43Z"
                  transform="translate(-2.55 -1.93)"/>
            <rect x="85.5" y="31.5" width="10.67" height="12.14"/>
            <rect x="85.5" y="45.5" width="10.67" height="12.14"/>
            <rect x="99.5" y="31.5" width="10.67" height="12.14"/>
            <rect x="99.5" y="45.5" width="10.67" height="12.14"/>
        </Svg>
    );
};

export default Icon;
