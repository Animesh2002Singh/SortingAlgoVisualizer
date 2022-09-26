"use strict";
const start = async () => {
  let algoValue = Number(document.querySelector(".algo-menu").value);
  let speedValue = Number(document.querySelector(".speed-menu").value);

  if (speedValue === 0) {
    speedValue = 1;
  }

  let algorithm = new sortAlgorithms(speedValue);
  if(algoValue == 1){
    document.getElementById("Info").innerHTML = "Method : Exchanging, Type : Internal , Time Complexity(average case) : O(n^2)";
    document.getElementById("Statement").innerHTML = "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.";
  }
  if(algoValue == 2){
    document.getElementById("Info").innerHTML = "Method : Selection, Type : Internal , Time Complexity(average case) : O(n^2)";
    document.getElementById("Statement").innerHTML = "In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort";
  }
  if(algoValue == 3){
    document.getElementById("Info").innerHTML = "Method : Insertion(swapping), Type : Internal , Time Complexity(average case) : O(n^2)";
    document.getElementById("Statement").innerHTML = "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.";
  }
  if(algoValue == 4){
    document.getElementById("Info").innerHTML = "Method : Merging , Type : External , Time Complexity(average case): n*log(n) ";
    document.getElementById("Statement").innerHTML = "Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list";
  }
  if(algoValue == 5){
    document.getElementById("Info").innerHTML = "Method : Partioning , Type : External , Time Complexity(average case): n*log(n)";
    document.getElementById("Statement").innerHTML = "Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot";
  }
  if (algoValue === 1) await algorithm.BubbleSort();
  if (algoValue === 2) await algorithm.SelectionSort();
  if (algoValue === 3) await algorithm.InsertionSort();
  if (algoValue === 4) await algorithm.MergeSort();
  if (algoValue === 5) await algorithm.QuickSort();

};

const RenderScreen = async () => {
  document.getElementById("Info").innerHTML = " ";
  document.getElementById("Statement").innerHTML = "NOTE: Turquise: Bar Under Process, Light Green: Bar in Correct Position, Purple: Bar is currently KEY";
 
  await RenderList();
};

const RenderList = async () => {
  let sizeValue = Number(document.querySelector(".size-menu").value);
  await clearScreen();
  let list = await randomList(sizeValue);
  const arrayNode = document.querySelector(".array");
  for (const element of list) {
    const node = document.createElement("div");
    node.className = "cell";
    node.setAttribute("value", String(element));
    node.style.height = `${3.8 * element}px`;
    arrayNode.appendChild(node);
  }
};

const randomList = async (Length) => {
  let list = new Array();
  let lowerBound = 1;
  let upperBound = 100;
  for (let counter = 0; counter < Length; ++counter) {
    let randomNumber = Math.floor(
      Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
    list.push(parseInt(randomNumber));
  }
  return list;
};

const clearScreen = async () => {
  document.querySelector(".array").innerHTML = "";
};


document.querySelector(".start").addEventListener("click", start);
document.querySelector(".size-menu").addEventListener("change", RenderScreen);
document.querySelector(".algo-menu").addEventListener("change", RenderScreen);
window.onload = RenderScreen;
