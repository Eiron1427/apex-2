import type { PageHeaderProps } from "@/types";

export const PageHeader = ({title, description,}: PageHeaderProps) => {
    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-0">{title}</h2>
            {description ? 
            (<p className="text-base-content/70 mt-1">{description}</p>) 
            : null}
        </>
    );
};