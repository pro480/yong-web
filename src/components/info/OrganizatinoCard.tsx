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
            <div className={`h-fit py-3 mx-2 text-center rounded-lg bg-${color}`}>{title}</div>
        </Link>
    );
}

export default OrganizationCard;
