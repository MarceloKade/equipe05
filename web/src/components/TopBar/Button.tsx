import { Bars3Icon } from "@heroicons/react/16/solid";
import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
    base: `transition-colors duration-300 border-2 border-primitive-500 rounded-full bg-transparent text-white text-[1.8rem] font-semibold 
    hover:bg-primitive-500 hover:border-primitive-500 hover:text-hover 
    active:bg-primitive-400 active:text-neutral-300 hidden xl:block`,
    variants: {
        size: {
            default: 'w-[13.2rem] h-[4.8rem]',
        },
        burguer: {
            true:
                `
                    w-[4.0rem] h-[4.0rem] my-[1.2rem] mr-[2.0rem] 
                    border-none bg-none 
                    hover:bg-transparent hover:text-neutral-300 
                    active:bg-transparent active:text-neutral-400 
                    block
                    xl:hidden
                `,
        },
    },
    defaultVariants: {
        size: 'default',
        burguer: false,
    },
});

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export function Button({ burguer, size, className, ...props }: ButtonProps) {
    return (
        <button className={button({ size, burguer, className })}  {...props}>
            {burguer ? (
                <Bars3Icon className="w-[2.133rem] mx-auto" />
            ) : (
                props.children
            )}
        </button>
    );
}
