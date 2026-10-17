"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { PortfolioImage } from "@/content/assets";

type PhotoViewerProps = {
  photo: PortfolioImage;
  caption: string;
  sizes: string;
  position: string;
  aspectRatio: string;
};

export function PhotoViewer({ photo, caption, sizes, position, aspectRatio }: PhotoViewerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const titleId = useId();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <a
        ref={trigger}
        className="photo-trigger"
        href={photo.src.src}
        aria-label={`View larger photo: ${photo.alt}`}
        aria-haspopup="dialog"
        onClick={(event) => {
          // The real image link still works without JS or dialog support.
          if (!dialog.current || typeof dialog.current.showModal !== "function") return;
          event.preventDefault();
          setOpened(true);
          dialog.current.showModal();
        }}
      >
        <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" style={{ objectPosition: position }} />
        <span className="photo-view-label" aria-hidden="true">View photo</span>
      </a>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-labelledby={titleId}
        onKeyDown={(event) => {
          // Close is the viewer's only control; keep Tab/Shift+Tab inside it.
          if (event.key === "Tab") {
            event.preventDefault();
            event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
          }
        }}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onClose={() => { setOpened(false); trigger.current?.focus(); }}
      >
        <div className="photo-dialog-header">
          <h4 id={titleId}>{caption}</h4>
          <button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close photo">Close <span aria-hidden="true">×</span></button>
        </div>
        {opened && (
          <div className="photo-dialog-image" style={{ aspectRatio }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1132px) 1100px, calc(100vw - 32px)"
              loading="eager"
              className="object-contain"
            />
          </div>
        )}
      </dialog>
    </>
  );
}
