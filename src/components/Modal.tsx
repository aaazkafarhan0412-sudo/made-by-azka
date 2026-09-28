import { useEffect, useRef, type ReactNode } from "react";
import { Icon } from "@/components/Icons";
import { useScrollLock } from "@/hooks";
import { cn } from "@/utils/cn";

/* ============================================================================
   MODAL SHELL — accessible dialog used by case studies and the lightbox.
   ========================================================================== */

type ModalProps = {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
  className?: string;
  onPrev?: () => void;
  onNext?: () => void;
  counter?: string;
};

export function Modal({ open, onClose, label, children, className, onPrev, onNext, counter }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onNext, onPrev]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div className="fade-in absolute inset-0 bg-ink/60 backdrop-blur-[3px]" onClick={onClose} />

      <div
        ref={panelRef}
        tabIndex={-1}
        className={cn(
          "modal-pop relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-t-[1.8rem] bg-cream shadow-lift outline-none sm:rounded-[1.8rem]",
          className
        )}
      >
        {/* dialog controls */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-line/70 bg-cream/90 px-5 py-3 backdrop-blur-md sm:px-7">
          <span className="eyebrow text-mauve">{counter ?? label}</span>
          <div className="flex items-center gap-2">
            {onPrev && (
              <button
                type="button"
                onClick={onPrev}
                aria-label="Previous"
                className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-line text-plum transition hover:bg-plum hover:text-cream"
              >
                <Icon name="arrowLeft" size={16} />
              </button>
            )}
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                aria-label="Next"
                className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-line text-plum transition hover:bg-plum hover:text-cream"
              >
                <Icon name="arrowRight" size={16} />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-full bg-plum text-cream transition hover:scale-105 hover:bg-rose"
            >
              <Icon name="close" size={16} />
            </button>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
