# Project Scaffold
A fork of the Figma plugin by [https://github.com/tushar7d/Project-Scaffold-Figma-Plugin](tushar7d).

### Features
* Auto generates a consistent project structure for your team, so your organization is consistent across teams
* Creates a cover for your project (COMING SOON)

### How to use
* Fork this repo and install typescript on your machine
* Edit the `code.ts` file
* Run the command `tsc` in your terminal to generate a new code.js file with the changes you've made
* Publish the plugin to your organization internally, use the assets in the asset folder during the publish process
* Success!

### How is this different than the published plugin?
* We altered the pages this creates to fit our own process.
* This version does not create a cover (yet)

### Creating your own project structure
Edit the first few lines of the `code.ts` file to create your own project structure.
```javascript
// Create pages
let workInProgressPage = figma.createPage();
let scratchPage = figma.createPage();
```
First declare the pages you want to create.
```javascript
// Set page names
figma.currentPage.name = "✅ Ready For Development";
workInProgressPage.name = "🚧 Work In Progress";
scratchPage.name = "❌ Scratch";
```
Then set the names of these pages. We try and keep our project stucture simple so we're not removing pages everytime we run this plugin.

We also add text layers to our scratch file of other page examples you may need later in your project for easy copy pasting.
```javascript
await createAdditionalPageExample("🚢 Shipped");
await createAdditionalPageExample("🕹 Prototype");
```

