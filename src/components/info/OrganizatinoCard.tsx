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
            <div className={`py-3 px-2 mx-2 text-center rounded-lg bg-${color} whitespace-nowrap truncate hover:text-clip hover:cursor-pointer`}>{title}</div>
        </Link>
    );
}

export default OrganizationCard;
