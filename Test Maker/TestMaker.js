function CreateQuestion(){
    let paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    let questionName = document.createElement("input");
    questionName.setAttribute('type', 'text');
    questionName.setAttribute('size', '35');
    document.body.appendChild(questionName);
}
function CreateRadio(){
    let paragraph = document.createElement("p");
    document.body.appendChild(paragraph);
    let defaultRadio = document.createElement("input");
    defaultRadio.setAttribute("type", "radio");
    document.body.appendChild(defaultRadio);
    let radioOption = document.createElement("input");
    radioOption.setAttribute('type', 'text');
    document.body.appendChild(radioOption);
}