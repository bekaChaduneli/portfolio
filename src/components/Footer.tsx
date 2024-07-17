"use client";
import Image from "next/image";
import React from "react";
import NavigationLink from "./Navbar/NavigationLink";

export default function Footer() {
    return (
        <footer className="relative mb-[20px] mx-1 lg:mx-[20px] text-white flex justify-center">
            <div className="w-full justify-between border-b-[1px] border-primary dark:border-secondary duration-300 transition-all py-[12px] max-w-[1200px]">
                <NavigationLink
                    href="/"
                    className="cursor-pointer group flex gap-[12px] items-center"
                >
                    <Image
                        className="w-[48px] group-hover:scale-[85%] transition duration-200 h-[48px] border-[2px] sm:w-[54px] sm:h-[54px] md:w-[58px] md:h-[58px] sm:border-[3px] border-[#283D8B] dark:border-secondary rounded-full"
                        src="/profile.jpg"
                        alt="profile"
                        width={650}
                        height={650}
                    />
                    <div className="text-start">
                        <h3 className="font-extrabold text-[20px] text-primary dark:text-secondary font-geom leading-[100%]">
                            Beka Chaduneli
                        </h3>
                        <h3 className="font-medium text-[17.2px] text-primary dark:text-secondary">
                            Software Engineer
                        </h3>
                    </div>
                </NavigationLink>
            </div>
        </footer>
    );
}
