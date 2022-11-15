import React from "react";

// reactstrap components
import { Button, UncontrolledTooltip } from "reactstrap";

function MoreInfo({
    title,
    content,
}: {
    title: string,
    content: string,
}) {
  return (
    <>
      <Button
        color="primary"
        data-placement="bottom"
        id="tooltip"
        size="sm"
        type="button"
      >
        {title}
      </Button>
      <UncontrolledTooltip
        className="text-sm"
        delay={0}
        placement="top-start"
        target="tooltip"
      >
        <div className="flex flex-col items-center">
            <span
                className="relative z-30 text-sm leading-none font-medium rounded text-gray-600 whitespace-no-wrap bg-gray-50">
                <p className="py-3 px-2">{content}</p>  
            </span>
        </div>
        
      </UncontrolledTooltip>
    </>
  );
}

export default MoreInfo;