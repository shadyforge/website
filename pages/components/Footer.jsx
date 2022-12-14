import Link from "next/link"

import { AtSymbolIcon, DevicePhoneMobileIcon } from '@heroicons/reactv2/24/solid'

export default function Footer() {
    return (
        <div className="py-5 border-b-2 rounded-lg shadow-xl primary dark:bg-black ">
            <div className="mx-16 md:whiteSpaceMargins">
                <h1 className="text-5xl navAndFooterFont bronzeSmolderGradient hover:opacity-[0.85] text-left">
                    <Link href={'/'}>
                        <a>Shadyforge</a>
                    </Link>
                </h1>
                <div className="flex items-center justify-start">
                    <div className="flex gap-2 hover:opacity-[0.85]">
                        <Link href={'mailto:hi@shadyforge.com'}>
                            <a>
                                <AtSymbolIcon className="h-[20px] my-auto flex items-center justify-center" />
                            </a>
                        </Link>
                        <Link href={'tel:209-877-5227'}>
                            <a>
                                <DevicePhoneMobileIcon className="h-[22px] my-auto flex items-center justify-center" />
                            </a>
                        </Link>
                    </div>
                </div>
                <h2 className="my-5 text-left text-md">
                    1475 N Scottsdale Road,<br />Room 1951<br />
                    Scottsdale, AZ 85257-3504
                </h2>
                <div className="text-sm text-left">
                    <p>Illustrations by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons8</a> from <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Ouch!</a>
                    </p>
                    <p>Copyright © 2022 Shadyforge LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}