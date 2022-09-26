const RenderArray = async (sorted) => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    await clearScreen();
  
    let list = await randomList(sizeValue);
    if (sorted) list.sort((a, b) => a - b);
  
    const arrayNode = document.querySelector(".array");
    const divnode = document.createElement("div");
    divnode.className = "s-array";
  
    for (const element of list) {
      const dnode = document.createElement("div");
      dnode.className = "s-cell";
      dnode.innerText = element;
      divnode.appendChild(dnode);
    }
    arrayNode.appendChild(divnode);
  };