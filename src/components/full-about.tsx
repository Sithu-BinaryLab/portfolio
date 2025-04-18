"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const FullAboutComponent = () => {
  const router = useRouter();
  const goToAbout = () => {
    router.push("/about");
  };
  return (
    <div className="pt-5 pb-5 sm:pb-5 md:pb-0" onClick={goToAbout}>
      <a
        className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
        aria-label="View Full Project Archive"
        href="/about"
      >
        <span>
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
            Overview Skîll
          </span>
        </span>
        <span className="my-auto pl-5">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--noto shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M4.31 11.47c-1.71 2.99.97 9.35 14.07 11.95c16.31 3.24 33.88-3.32 47.13-1.01c7.54 1.32 12.32 3.03 15.06 4.27c2.13.97 2.13 1.05 2.13 1.05l3.38-10.72s-9.41-5.1-22.03-5.66s-22 3.57-34.51 3.24c-18.86-.5-22.55-7.81-25.23-3.12z"
              fill="#966738"
            ></path>
            <path
              d="M102.24 45.73l10.38-4.24S118 49 119.9 63.74c2.27 17.61-3.24 29.26-1.45 39.2s5.7 15.3 5.36 17.65c-.34 2.35-2.01 4.91-4.24 3.69c-2.23-1.23-9.19-10.17-9.49-22.56c-.34-13.74 3.47-25.2.34-37.41c-3.48-13.53-8.18-18.58-8.18-18.58z"
              fill="#966738"
            ></path>
            <path
              d="M85.28 16.61l-4.49 10.18s6.01 2.65 12.64 8.69c5.79 5.28 9.94 11.73 9.94 11.73l9.27-5.7s-4.81-8.52-11.84-14.63c-8.37-7.28-15.52-10.27-15.52-10.27z"
              fill="#d29f6c"
            ></path>
            <path
              fill="#f3c976"
              d="M102.7 21.02L33.72 91.64l.3 3.28l2.98.45l69.73-70.47z"
            ></path>
            <path
              d="M105.74 17.62l-3.59 4.01l3.94 3.94l4.16-3.8s6.62 1.27 7.33.85c.97-.58 6.78-18.55 6.48-19.02c-.49-.77-6.56 1.66-10.42 3.03c-4.58 1.62-8.45 3.18-8.8 3.66c-.79 1.06.9 7.33.9 7.33z"
              fill="#858585"
            ></path>
            <path
              d="M115.36 122.03c-.17 0-.35-.02-.52-.07L31.51 99.38c-.68-.19-1.22-.72-1.4-1.4L8.87 20.94c-.1-.37-.1-.75.02-1.12l2.58-8.53l3.82 1.24l-1.98 9.31L33.5 95.32l81.06 22.65l6.04-6.97l1.52 3.93l-5.21 6.39c-.4.46-.96.71-1.55.71z"
              fill="#b8ced4"
            ></path>
            <path
              d="M33.81 92.2L37 95.37s-3.37 4.09-3.91 4.14c-.32.03-3.09-2.24-2.87-2.74c.22-.49 3.59-4.57 3.59-4.57z"
              fill="#5d6265"
            ></path>
            <path
              d="M51.7 73.77c-.03.08-5.32 5.65-10.2 10.8c-3.78 3.99-7.36 7.86-7.63 7.86c-.61 0-6.12-5.2-6.21-6.41S36 77.54 40 74.71c8.26-5.85 11.7-.94 11.7-.94z"
              fill="#db0d2a"
            ></path>
            <path
              d="M54.84 77c-.21.19-6.27 6.37-11.3 11.5c-3.45 3.52-6.51 6.53-6.55 6.82c-.05.41 4.62 5.81 5.11 5.81c.9 0 9.73-9.42 12.47-14.17c4.04-7 .27-9.96.27-9.96z"
              fill="#db0d2a"
            ></path>
          </svg>
        </span>
      </a>
    </div>
  );
};
