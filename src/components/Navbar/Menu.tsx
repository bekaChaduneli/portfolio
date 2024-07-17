import LanguageChanger from "./LanguageChanger";
import { navigationLinks } from "@/lib/siteData";
import classNames from "classnames";
import TransitionLink from "../shared/TransitionLink";
import ThemeSwitch from "./ThemeSwitch";
import SoundSwitcher from "./SoundSwitcher";
import { usePathname } from "next/navigation";
import { TFunction } from "i18next";

export default function Menu({
    isOpen,
    changeMenu,
    locale,
    t,
}: {
    isOpen: boolean;
    changeMenu: () => void;
    locale: string;
    t: TFunction;
}) {
    navigationLinks;
    const pathname = usePathname();
    return (
        <div
            className={classNames(
                "absolute flex flex-col duration-300 w-full h-full overflow-hidden lg:hidden bg-secondary dark:bg-[#283d8b] top-0 z-[30] animate-link-opacity",
                {
                    "opacity-100 visible": isOpen,
                    "opacity-0 invisible": !isOpen,
                }
            )}
            style={{
                transitionProperty: "opacity",
            }}
        >
            <div className="flex flex-col items-center mt-[20vh]">
                <nav
                    className={classNames(
                        "lg:hidden flex flex-col gap-[20px] sm:gap-[26px] md:gap-[30px] items-center px-[20px]",
                        {
                            " w-full z-[44]": isOpen,
                            "hidden ": !isOpen,
                            "font-firago": locale === "ka",
                            "font-geom": locale === "en",
                        }
                    )}
                >
                    <TransitionLink
                        href={`/${locale}`}
                        className={classNames(
                            "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase",
                            {
                                "opacity-[75%]": pathname === `/${locale}`,
                            }
                        )}
                        onClick={() => isOpen && changeMenu()}
                    >
                        {t("home")}
                    </TransitionLink>
                    <TransitionLink
                        href={`/${locale}/about`}
                        className={classNames(
                            "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase",
                            {
                                "opacity-[75%]":
                                    pathname === `/${locale}/about`,
                            }
                        )}
                        onClick={() => isOpen && changeMenu()}
                    >
                        {t("about")}
                    </TransitionLink>
                    <TransitionLink
                        href={`/${locale}/main`}
                        className={classNames(
                            "text-[#283d8b] dark:text-secondary text-[38px] leading-[100%] sm:text-[46px] md:text-[52px] font-bold uppercase",
                            {
                                "opacity-[75%]":
                                    pathname.startsWith(`/${locale}/main`) ||
                                    pathname.startsWith(`/${locale}/archive`),
                            }
                        )}
                        onClick={() => isOpen && changeMenu()}
                    >
                        {t("projects")}
                    </TransitionLink>
                    <TransitionLink
                        href={`/${locale}/blog`}
                        className={classNames(
                            "text-[#283d8b] dark:text-secondary text-[38px] sm:text-[46px] md:text-[52px] font-bold uppercase",
                            {
                                "opacity-[75%]": pathname === `/${locale}/blog`,
                            }
                        )}
                        onClick={() => isOpen && changeMenu()}
                    >
                        {t("blog")}
                    </TransitionLink>
                </nav>
            </div>
            <div className="absolute bottom-[40px] w-full px-[40px] flex justify-between items-center gap-[20px]">
                <LanguageChanger locale={locale} />
                <div className="flex gap-[22px]">
                    <ThemeSwitch />
                    <SoundSwitcher />
                </div>
            </div>
        </div>
    );
}
