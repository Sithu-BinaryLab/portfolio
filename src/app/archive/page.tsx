"use client";

import React, { useState } from "react";

const Archivepages = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setSpotlightPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="min-h-screen w-full  font-sans "
      onMouseMove={handleMouseMove}
      style={{
        background: `radial-gradient(600px at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div className="mx-auto max-w-screen-xl  px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:py-24">
          <a
            className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Si Thu Lwin
          </a>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            All Projects
          </h1>
          <table
            id="content"
            className="mt-12 w-full border-collapse text-left"
          >
            <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
              <tr>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Year
                </th>
                <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                  Project
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                  Built with
                </th>
                <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2023</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Newsmast Social App</span>
                    </div>
                    <div className="hidden sm:block">Newsmast Social App</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Binary Lab
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Next JS
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React Query
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Cypress
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Firebase
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://newsmast.org/home"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            newsmast.org
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>GESC Chinese Language Centre Admin Dashboard</span>
                    </div>
                    <div className="hidden sm:block">
                      GESC Chinese Language Centre Admin Dashboard
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Ultimate Solutions
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Next JS
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        MUI
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        SWR
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        SSR
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://admin.gescchinese.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            gescchinese.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>UpJob</span>
                    </div>
                    <div className="hidden sm:block">UpJob</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">Remote</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                    {/* <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li> */}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          {/* <span className="inline-block">
                            apps.apple.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span> */}
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>PortFolio Version 2</span>
                    </div>
                    <div className="hidden sm:block">PortFolio Version 2</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  {/* <div className="translate-y-px whitespace-nowrap">
                    Upstatement
                  </div> */}
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://sithulwin.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            sithulwin.v2.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>KKA Gold & Jewellery</span>
                    </div>
                    <div className="hidden sm:block">KKA Gold & Jewellery</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanamr High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://kkagold.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            kkagold.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span></span>
                    </div>
                    <div className="hidden sm:block">
                      MyPet | Myanmar&apos;s Best Pet Supplies!
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanmar High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://www.mypetmm.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            mypetmm.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>The ASK Academy </span>
                    </div>
                    <div className="hidden sm:block">The ASK Academy</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanmar High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://askacademy.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            askacademy.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>May May online shop | Yangon</span>
                    </div>
                    <div className="hidden sm:block">
                      May May online shop | Yangon
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanamr High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://maymayshop.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            may2shop.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Diary Gallery</span>
                    </div>
                    <div className="hidden sm:block">Diary Gallery</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  {/* <div className="translate-y-px whitespace-nowrap">
                    Upstatement
                  </div> */}
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Firebase
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://frosty-albattani-2fe146.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            gdiary.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Shopify Clone</span>
                    </div>
                    <div className="hidden sm:block">Shopify Clone</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  {/* <div className="translate-y-px whitespace-nowrap">
                    Upstatement
                  </div> */}
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux Toolkit
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Bootstrap
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      {/* <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            apps.apple.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a> */}
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Ultimat Coding Test</span>
                    </div>
                    <div className="hidden sm:block">Ultimat Coding Test</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">Test</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Tailwind
                      </div>
                    </li>
                    {/* <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li> */}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://coding-test-gl3d.vercel.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            clone-test.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Flymya Coding Test</span>
                    </div>
                    <div className="hidden sm:block">Flymya Coding Test</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">Test</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        MUI
                      </div>
                    </li>
                    {/* <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li> */}
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://flymya-web-app.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            flymya-web
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2022</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Flymya Mobile App</span>
                    </div>
                    <div className="hidden sm:block">Flymya Mobile App</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">Test</div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React Native
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        CSS
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        TypeScript
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://expo.dev/artifacts/eas/34Kjuwra71nrZFXVeRJWw7.apk"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            flymya-mobile
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2021</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>AWR Myanmar</span>
                    </div>
                    <div className="hidden sm:block">AWR Myanmar</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanmar High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Bootstrap
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://awmra.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            awr.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2021</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>M21 Sport</span>
                    </div>
                    <div className="hidden sm:block">M21 Sport</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanmar High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Bootstrap
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://m21sport.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            m21.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2020</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>360 Delight Bar | Best Bar & Lounge</span>
                    </div>
                    <div className="hidden sm:block">
                      360 Delight Bar | Best Bar & Lounge
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanmar High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Bootstrap
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://360delightbar.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            360bar.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b border-slate-300/10 text-slate-200 last:border-none">
                <td className="py-4 pr-4 align-top text-sm">
                  <div className="translate-y-px">2020</div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <div>
                    <div className="block sm:hidden">
                      <span>Zwe Tet Diamonds</span>
                    </div>
                    <div className="hidden sm:block">Zwe Tet Diamonds</div>
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell text-slate-200">
                  <div className="translate-y-px whitespace-nowrap">
                    Myanmar High Society
                  </div>
                </td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex -translate-y-1.5 flex-wrap">
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        React
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Redux
                      </div>
                    </li>
                    <li className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        Bootstrap
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="hidden py-4 align-top sm:table-cell">
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                        href="https://zwetet.shopdoora.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="apps.apple.com (opens in a new tab)"
                      >
                        <span>
                          {" "}
                          <span className="inline-block">
                            zwetet.com
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Archivepages;
