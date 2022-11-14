import React from "react";
import Link from "next/link";

interface Props {
    title: string;
    href: string;
    color?: string;
}

function OrganizationCard({ title, color, href }: Props) {
    return (
        <Link href={href}>
            <div className={`py-3 px-2 mx-2 text-center rounded-lg ${color ? `bg-${color}` : "bg-PRIMARY_COLOR-600"}  whitespace-nowrap truncate hover:text-clip hover:whitespace-normal hover:cursor-pointer`}>{title}</div>
        </Link>
    );
}

export default OrganizationCard;
