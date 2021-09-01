export const putAriaLabelOnQuillToolbar = () => {
  const qlToolbar = document.querySelector(".ql-toolbar")!;
  const changeFontSizeBtn = qlToolbar.querySelector(
    ".ql-picker-label"
  ) as HTMLElement;
  const boldBtn = qlToolbar.querySelector(".ql-bold") as HTMLButtonElement;
  const italicBtn = qlToolbar.querySelector(".ql-italic") as HTMLButtonElement;
  const underlineBtn = qlToolbar.querySelector(
    ".ql-underline"
  ) as HTMLButtonElement;
  const linkBtn = qlToolbar.querySelector(".ql-link") as HTMLButtonElement;
  const listOrderedBtn = qlToolbar.querySelector(
    ".ql-list[value=ordered]"
  ) as HTMLButtonElement;
  const listBulletBtn = qlToolbar.querySelector(
    ".ql-list[value=bullet]"
  ) as HTMLButtonElement;
  const cleanBtn = qlToolbar.querySelector(".ql-clean") as HTMLButtonElement;

  changeFontSizeBtn.setAttribute("aria-label", "Change font size");
  boldBtn.setAttribute("aria-label", "Bold");
  italicBtn.setAttribute("aria-label", "Italic");
  underlineBtn.setAttribute("aria-label", "Underline");
  linkBtn.setAttribute("aria-label", "Make a link");
  listOrderedBtn.setAttribute("aria-label", "Make an ordered list");
  listBulletBtn.setAttribute("aria-label", "Make unordered list");
  cleanBtn.setAttribute("aria-label", "Remove styles");
};
