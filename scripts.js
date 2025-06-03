import INFO from "./info.json";
//const INFO = '{ "headings": [ "What am I?", "How am I?", "Why am I?" ],' +
//    '"bodies": [ "I am a software engineer in training.", "Pretty good, thanks", "Im not sure" ] }';

const addSection = (row, heading, text, link, imgLink) => {
    const gridContainer = document.getElementById("summary");

    const textbox = document.createElement("div");
    const question = document.createElement("h1");
    const description = document.createElement("p");
    const button = document.createElement("a");
    //const image = document.createElement("img");

    textbox.classList.add("textbox");
    textbox.appendChild(question);
    textbox.appendChild(description);
    //button.appendChild(image);

    textbox.style.gridArea = `${row} / 2 / ${row + 1} / 3`;
    button.style.gridArea = `${row} / 4 / ${row + 1} / 5`;
    question.innerHTML = heading;
    description.innerHTML = text;
    button.setAttribute("href", link)
    //image.setAttribute("src", imgLink);
    button.innerHTML = "link";

    gridContainer.appendChild(textbox);
    gridContainer.appendChild(button);
}

const test = document.getElementById("test");
//fetch('./info.json').then(response => JSON.parse(response)).catch(error => test.innerHTML = error);
test.innerHTML = "aaa";

infoObj = JSON.parse(INFO);
const headings = infoObj.headings;

for(let i = 0; i < 2; i++) {
    addSection(i+1, headings[i], "I am Benjamin Meyer", "/skills.html", "");
}
