import {
  addMoreBooks,
  toggleSystemsColour,
  getFilter,
  createInDetailBookPreview,
  closeDetailedBookOverlay,
  closefilterSectionOverlay,
  closeToggleNightModeOverlay,
  openSearchMenufiltersystem,
  openSettingMenu,
} from "./modules/htmlElementFunctions.js";
import { html, css, documentElement } from "./htmlAndCss.js";
import {
  firstSetOfBooks,
  createGenre,
  createAuthorOptionts,
} from "./modules/function.js";
import { books } from "./data.js";

// this section produces the first 36 books to appear on the html
html.displaySection.dataListItems.appendChild(firstSetOfBooks(books));

// this section produces for the genre options
html.filterSection.searchGenre.appendChild(createGenre());

// this section produces for the author options
html.filterSection.searchAuthors.appendChild(createAuthorOptionts());

//filter system that narrows down the book search
html.filterSection.searchForm.addEventListener("submit", getFilter);

/**
 * will make {@link addMoreBooks}- behave like a loop since every time dropDownButton is clicked it will append 36 unique books to the html
 */
html.displaySection.dropDownButton.addEventListener("click", addMoreBooks);

/**
 * nightmode addEventListener that toggles between day and night using {@link css } and {@link documentElement}
 */
html.toggleNightMode.settingMenu.addEventListener(
  "submit",
  toggleSystemsColour
);

// this section refers to the in-detail-book preview feature
html.displaySection.dataListItems.addEventListener(
  "click",
  createInDetailBookPreview
);

// closes over-lay section
html.detailedPreviewOfbooks.activeCloseButton.addEventListener(
  "click",
  closeDetailedBookOverlay
); /**  closes focusOnBook overlay*/
html.filterSection.searchCancelButton.addEventListener(
  "click",
  closefilterSectionOverlay
); // closes searchMenu overlay
html.toggleNightMode.settingCancelButton.addEventListener(
  "click",
  closeToggleNightModeOverlay
); //   closes settingMenu overlay   overlay

//open overlay section

html.filterSection.searchIcon.addEventListener(
  "click",
  openSearchMenufiltersystem
); // shows search menu
html.toggleNightMode.settingIcon.addEventListener("click", openSettingMenu); //opens settingMenu
