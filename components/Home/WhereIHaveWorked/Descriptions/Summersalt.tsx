import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Summersalt() {
  const tasks = [
    {
      text: "Refactored jQuery and React legacy code, reducing tech debt and optimizing render performance by 25%",
      keywords: ["jQuery","React"],
    },
    {
      text: "Spearheaded a monogramming feature for collections items and a spotlight module within the homepage using TypeScript and NextJS, contributing to an increase of $35,000+ in monthly revenue",
      keywords: ["TypeScript","NextJS"],
    },
    {
      text: "Improved CI/CD workflow utilizing Github Actions with Cypress to create an automated report with test cases that displays the status of all results on the build pipeline, minimizing code regression on production by 50%",
      keywords: ["Github Actions", "Cypress"],
    },
    {
      text: "Assisted in optimizing queries using Google BigQuery and dbt, resulting in improved data processing by 10%",
      keywords: ["Google BigQuery", "dbt"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer Intern<span className="text-AAsecondary"> @ SUMMERSALT</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.summersalt.com/", "_blank")}
          >
            https://www.summersalt.com/
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
