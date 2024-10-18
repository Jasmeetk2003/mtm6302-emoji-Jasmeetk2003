
const emojis = [
    { code: "128512", name: "😀" }, 
    { code: "128513", name: "😁" }, 
    { code: "128514", name: "😂" }, 
    { code: "128525", name: "😍" }, 
    { code: "128545", name: "😡" },
    { code: "129409", name: "🦁" }, 
    { code: "129412", name: "🦄" }, 
    { code: "129315", name: "🤣" }, 
    { code: "128526", name: "😎" }, 
    { code: "128640", name: "🚀" }, 
    { code: "128149", name: "💝" },
    { code: "128518", name: "😆" },
    { code: "129303", name: "🤗" },
    { code: "129325", name: "🤭" },
    { code: "129397", name: "🥵" }
  ];
  
 
  const gallery = document.getElementById("emoji-gallery");
  
  
  emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
  
    const emojiChar = document.createElement("span");
    emojiChar.classList.add("emoji");
    emojiChar.innerHTML = `&#${emoji.code};`;
  
    
    const emojiCode = document.createElement("p");
    emojiCode.classList.add("code");
    emojiCode.textContent = emoji.code;
  
    
    emojiItem.appendChild(emojiChar);
    emojiItem.appendChild(emojiCode);
  
  
    gallery.appendChild(emojiItem);
  });
  