"use client";
import { useDisableOverflow } from "@/hooks/useDisableOverflow";
import usePopUpStore from "@/store/use-popup-store";

export default function PopUp() {
    const { isOpen, onClose } = usePopUpStore();
    useDisableOverflow(isOpen);
    if (!isOpen) return null;
    return (
        <div
            onClick={onClose}
            className="absolute z-[10] inset-0 bg-black/40 transition-all duration-300"
        ></div>
    );
}
