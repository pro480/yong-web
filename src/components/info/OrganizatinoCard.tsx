import React from "react";
import Link from "next/link";

interface Props {
    title: string;
    color: string;
    href: string;
}

function OrganizationCard({ title, color, href }: Props) {
    return (
        <Link href={href}>
            <div className={`py-3 lg:py-3.5 xl:py-4 px-2 mx-3 lg:mx-4 xl:mx-6 text-center us:text-base md:text-lg xl:text-xl rounded-lg ${color ? `bg-${color}` : "bg-PRIMARY_COLOR-600"} whitespace-nowrap truncate hover:text-clip hover:whitespace-normal hover:cursor-pointer`}>{title}</div>
        </Link>
    );
}

export default OrganizationCard;
