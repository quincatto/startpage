import { ReactNode } from "react";

interface ShortcutProps {
    link: ReactNode[];
}

export default function Shortcut({ link }: ShortcutProps) {

    return (
        <>
            <div className="mx-2 mt-16 col-span-1">
                <a href={link[0] as string} className='flex flex-col items-center border border-surface0 bg-surface0 p-4 rounded w-20'>
                    {link[1]}
                    <h2>{link[2]}</h2>
                </a>
            </div>
        </>
    )
}