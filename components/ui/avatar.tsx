import { AvatarProps } from "@/types";

const SIZES = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-9 w-9 text-xs',
    lg: 'h-20 w-20 text-3xl'
}

const VARIANTS = {
    'bg-primary': 'bg-primary text-primary-content',
    neutral: 'bg-neutral text-neutral-content'
    
}

export const Avatar = ({initial, size = 'md', variant = 'bg-primary'} : AvatarProps) => {
    return (
        <div className={`${SIZES[size]} ${VARIANTS[variant]} flex items-center justify-center rounded-full font-bold`}>
            {initial}
        </div>
    );
}
