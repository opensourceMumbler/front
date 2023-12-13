const arr = document.getElementById("arr");

chrome.storage.local.get(["mumbles"], (res) => {
    const mumbles = res.mumbles ?? [];
    mumbles.forEach(element => {
        if(element !== null) {
            arr.innerText += `${element.text}                            ${element.time} \n`;
        }
    });
})