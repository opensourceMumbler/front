const textArea = document.getElementById("text-area");
const sendBtn = document.getElementById("send-btn");
let arr = [];

chrome.storage.local.get(["mumbles"], (res) => {
    const text = res.mumbles;
    if(typeof(res.mumbles) !== typeof([])) {
        arr.push(text);
    } else{
        arr = text;
    }
})

sendBtn.addEventListener("click", () => {
    arr.push({text: textArea.value, time: new Date().toLocaleTimeString()});
    chrome.storage.local.set({
        mumbles: arr,
    })
})
