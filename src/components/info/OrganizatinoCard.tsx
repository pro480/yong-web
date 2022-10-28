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
            <div className={`organizationNode bg-${color}`}>{title}</div>
        </Link>
    );
}

export default OrganizationCard;
