const geminiUrlInput = document.getElementById("geminiUrl");
const geminiKeyInput = document.getElementById("geminiKey");
const toneInput = document.getElementById("tone");

const saveButton = document.getElementById("save");
const status = document.getElementById("status");

chrome.storage.local.get(
    ["geminiUrl", "geminiKey", "tone"],
    (data) => {

        if (data.geminiUrl) {
            geminiUrlInput.value = data.geminiUrl;
        }

        if (data.geminiKey) {
            geminiKeyInput.value = data.geminiKey;
        }

        if (data.tone) {
            toneInput.value = data.tone;
        }
    }
);

saveButton.addEventListener("click", () => {

    const geminiUrl = geminiUrlInput.value.trim();
    const geminiKey = geminiKeyInput.value.trim();
    const tone = toneInput.value;

    if (!geminiUrl || !geminiKey) {
        status.textContent = "Please enter both API values.";
        return;
    }

    chrome.storage.local.set(
        {
            geminiUrl: geminiUrl,
            geminiKey: geminiKey,
            tone: tone
        },
        () => {
            status.textContent = "Settings saved successfully.";
        }
    );
});