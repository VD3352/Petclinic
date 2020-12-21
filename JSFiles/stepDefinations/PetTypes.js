"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LoginPageObjects_1 = require("../pageObjects/LoginPageObjects");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const protractor_1 = require("protractor");
const PetTypesPageObjects_1 = require("../pageObjects/PetTypesPageObjects");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let logObj = new LoginPageObjects_1.LoginPageObjects();
let petTypesObj = new PetTypesPageObjects_1.PetTypesPageObjects();
cucumber_1.When('User clicks on PetTypes tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.PetTypes.click();
        yield console.log("User clicks");
        // console.log(" PageTitle as : " + petTypesObj.pageTitle.getAttribute("innerText"));
        // console.log(" Name as : " + petTypesObj.Name.getAttribute("innerText"));
    });
});
cucumber_1.Then('Pet Types title should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pageTitle = yield petTypesObj.pageTitle.getText();
        yield console.log(" PageTitle as : " + pageTitle);
        yield expect("Pet Types").to.equal(pageTitle);
    });
});
cucumber_1.Given('User is on PetTypes tab page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield petTypesObj.pageTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.Then('name field should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let nameField = yield petTypesObj.Name.getText();
        yield console.log(" Name Field : " + nameField);
        yield expect("Name").to.equal(nameField);
        protractor_1.browser.sleep(5000);
    });
});
cucumber_1.Then('On Pet Types page Add & Home button texts should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let addButton = yield petTypesObj.addButton.getText();
        let HomeButton = yield petTypesObj.HomeButton.getText();
        yield console.log(" Add Button : " + addButton);
        yield console.log(" Home Button : " + HomeButton);
        yield expect("Add").to.equal(addButton);
        yield expect("Home").to.equal(HomeButton);
    });
});
cucumber_1.When('User clicks on Add button on that page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield petTypesObj.addButton.click();
        console.log("Add Button clicked");
    });
});
cucumber_1.When('User give pet name {string} in text field and clicks submit', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield petTypesObj.nameTextbox.sendKeys(string);
        yield petTypesObj.saveButton.click();
    });
});
cucumber_1.Then('User should be navigate on PetTypes page and added pet name should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield petTypesObj.pageTitle.getText();
        yield console.log("page name is : " + pagename);
    });
});
/*When('User clicks on Add Button & give some pet name in text field and clicks submit', async function () {
    await petTypesObj.addButton.click();
    console.log("Add Button clicked");
    await petTypesObj.nameTextbox.sendKeys("Mouse");
    console.log("Pet type Mouse typed in a textbox");
    await petTypesObj.saveButton.click();
    console.log(" Save Button clicked");
   browser.sleep(7000);
});


Then('Pet name should be successfully added & should be disply in a table', async function () {
    let listEntry = await petTypesObj.listEntry.getText();
    await console.log(" listEntry : " + listEntry);
    await expect("Mouse").to.equal(listEntry);
});

When('User clicks on Deleted button tab', async function () {
    await HomeObj.PetTypes.click();
    await console.log("User clicks");
    // console.log(" PageTitle as : " + petTypesObj.pageTitle.getAttribute("innerText"));
    // console.log(" Name as : " + petTypesObj.Name.getAttribute("innerText"));
});

Then('Pet Types title should be displayed', async function () {
    let pageTitle = await petTypesObj.pageTitle.getText();
    await console.log(" PageTitle as : " + pageTitle);
    await expect("Pet Types").to.equal(pageTitle);
});*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGV0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvUGV0VHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msc0VBQW1FO0FBQ25FLG9FQUFpRTtBQUNqRSwyQ0FBNEU7QUFFNUUsNEVBQXlFO0FBR3pFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDcEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBQ3BDLElBQUksV0FBVyxHQUFHLElBQUkseUNBQW1CLEVBQUUsQ0FBQztBQUU1QyxlQUFJLENBQUMsNkJBQTZCLEVBQUU7O1FBQ2hDLE1BQU0sT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMscUZBQXFGO1FBQ3JGLDJFQUEyRTtJQUMvRSxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHFDQUFxQyxFQUFFOztRQUN4QyxJQUFJLFNBQVMsR0FBRyxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sTUFBTSxDQUFDLFdBQVcs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