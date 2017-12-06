import * as WebExtensions from '../src/common/WebExtensions'

browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { command: "messageRequest" }).then((response) => {
        console.log(response, tabs, WebExtensions.VERSION);
        const newImageHTMLElement = document.createElement("div");
        newImageHTMLElement.innerText = response as Object as string
        document.getElementsByTagName('body')[0].appendChild(newImageHTMLElement);
    });
});