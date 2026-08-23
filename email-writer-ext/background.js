chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "getSettings") {

        chrome.storage.local.get(
            ["geminiUrl", "geminiKey", "tone"],
            (settings) => {
                sendResponse(settings);
            }
        );

        return true;
    }
});