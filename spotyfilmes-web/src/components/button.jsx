import Link from "next/link";

export default function Button({icon, children, ...props}) {
    return (
        <Link href="#" {...props} className="flex items-center gap-1 bg-orange-500 px-2 py-1 rounded hover:bg-orange-700 transition-colors">
            {icon}
            {children}
        </Link>
    );
}