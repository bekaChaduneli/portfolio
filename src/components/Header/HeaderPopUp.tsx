import usePopUpStore from "@/store/use-popup-store";
import BooksPopUp from "./BooksPopUp";
import GithubPopUp from "./GithubPopUp";
import LinkedinPopUp from "./LinkedinPopUp";
import ProfilePopUp from "./ProfilePopUp";

export default function HeaderPopUp() {
    const { isOpen, type } = usePopUpStore();
    if (!isOpen) return null;
    return (
        <>
            {type === "books" ? (
                <BooksPopUp />
            ) : type === "github" ? (
                <GithubPopUp />
            ) : type === "linkedin" ? (
                <LinkedinPopUp />
            ) : (
                type === "profile" && <ProfilePopUp />
            )}
        </>
    );
}
