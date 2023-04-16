import React from "react";

interface Props {
    borderColor?: string; // PRIMARY_COLOR-500, red-500, gray-300 등
    borderStyle?: string; // ex. dashed, solid 등
}

function HorizontalRule({ borderColor, borderStyle }: Props) {
    return (
        <hr
            className={`border ${
                borderColor
                    ? `border-${borderColor}`
                    : "border-PRIMARY_COLOR-200"
            } ${borderStyle && `border-${borderStyle}`}`}
        />
    );
}

export default HorizontalRule;
