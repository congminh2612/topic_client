/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const TextInput = React.forwardRef(
    (
        {

            type,
            className,

            placeholder,
            spacing,
            onChange,
            ...props

        },
        ref
    ) => {
        return (
            <div className={clsx(spacing ? spacing : 'space-x-2')}>

                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={twMerge('border border-gray-400 p-[9.5px] outline-none  rounded-md bg-gray-200  hover:border-neutral-600 focus:border-neutral-500 focus:bg-white', className)}
                    {...props}
                />
            </div>
        )
    }
)


export default TextInput