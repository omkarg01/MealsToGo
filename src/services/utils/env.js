import { isStyledComponent } from "styled-components";

export const isMock = true;
// export const host = isMock
//   ? "http://localhost:5001"
//   : "http://eadf1e6b7477.ngrok.io";

export const host = "http://localhost:5001";

// const bot = () => {
//   const sectionEl = document.querySelectorAll("div[aria-expanded='false']");
//   sectionEl.forEach((section) => section.click());

//   // Stores all checkboxes on the page, and clicks on any checkboxes on that currently checked
//   const checkboxes = document.querySelectorAll("input[type='checkbox']");
//   checkboxes.forEach((checkbox, i) => {
//     if (checkbox.checked) {
//       setInterval(() => {
//         if (checkbox.checked && i > 159) {
//           checkbox.click();
//         }
//       }, 1000);
//     }
//   });
// };
// setInterval(bot, 1000);

// const sectionEl = document.querySelectorAll("div[aria-expanded='false']");
//   sectionEl.forEach((section) => section.click());

//   // Stores all checkboxes on the page, and clicks on any checkboxes on that currently checked
//   const checkboxes = document.querySelectorAll("input[type='checkbox']");
//   checkboxes.forEach((checkbox, i) => {
//     if (checkbox.checked && i === 336 ) {
//       checkbox.click();
//     }
//   });
