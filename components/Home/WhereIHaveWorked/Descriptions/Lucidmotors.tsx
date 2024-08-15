import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LucidMotors() {
  const tasks = [
    {
      text: "Developed scalable components for on-boarding workflows and supply chain tooling within the in-house portal, streamlining deprecated code and improving maintainability using React and TypeScript",
      keywords: ["TypeScript", "React"],
    },
    {
      text: "Integrated API calls using NestJS, MongoDB, and AWS S3 Buckets to seamlessly update supplier data for the internal contract management system (Agiloft)",
      keywords: ["NestJS", "MongoDB", "AWS S3 Buckets"],
    },
    {
      text: "Improved unit test coverage using Jest for critical client facing features, reducing code-regression on the back-end",
      keywords: ["Jest"],
    },
    {
      text: "Designed a data-driven automated tool for on-boarding new suppliers, significantly decreasing the manual process from an estimated average of 35 minutes to <3 minutes using Playwright",
      keywords: ["Playwright"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern<span className="text-AAsecondary"> @ Lucid Motors</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.lucidmotors.com/", "_blank")}
          >
            https://www.lucidmotors.com/
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
