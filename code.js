var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Create pages
let CoverPage = figma.createPage();
let LocalComponentPage = figma.createPage();
let separatorPage = figma.createPage();
let ExplorationPage = figma.createPage();
let DesignPage = figma.createPage();
let CopyReviewPage = figma.createPage();
let ReadyforReviewPage = figma.createPage();
let HandoffPage = figma.createPage();
let separator2Page = figma.createPage();
let prototypePage = figma.createPage();
let PlaygroundPage = figma.createPage();
let ArchivePage = figma.createPage();
// Set page names and renames the default "Page 1"
figma.currentPage.name = "👉 Start here";
CoverPage.name = "🖼 Cover";
LocalComponentPage.name = "🔗 Local components";
separatorPage.name = "---------------------------------------";
ExplorationPage.name = "🔎 Exploration";
DesignPage.name = "🎨 Design";
CopyReviewPage.name = "🖋 Copy Review";
ReadyforReviewPage.name = "👀 Ready for Review";
HandoffPage.name = "💻 Hand-off";
separator2Page.name = "---------------------------------------";
prototypePage.name = "🕹 Prototype";
PlaygroundPage.name = "🛝 Playground";
ArchivePage.name = "🗃 Archive";
// Frame for wrapping the list of page examples.
let listFrame = figma.createFrame();
listFrame.name = "Other page examples";
listFrame.layoutMode = "VERTICAL";
listFrame.counterAxisSizingMode = "AUTO";
listFrame.verticalPadding = 16;
listFrame.horizontalPadding = 16;
listFrame.itemSpacing = 16;
listFrame.cornerRadius = 8;
ArchivePage.appendChild(listFrame);
let run = () => __awaiter(this, void 0, void 0, function* () {
    // Need to load a font here to generate the other page examples.
    yield figma.loadFontAsync({ family: "Mark Pro", style: "Regular" });
    yield figma.loadFontAsync({ family: "Mark Pro", style: "Bold" });
    figma.notify("Project Scafolding Done 👍");
    figma.closePlugin();
});
// This function adds an example of how to name your less common pages + their emoji
// to your scratch page.
let createAdditionalPageExample = (text) => {
    let linkLabel = figma.createText();
    linkLabel.fontName = { family: "Mark Pro", style: "Regular" };
    linkLabel.characters = text;
    linkLabel.fontSize = 16;
    listFrame.appendChild(linkLabel);
};
run();
