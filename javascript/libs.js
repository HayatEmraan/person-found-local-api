const x = () => {
    const y = document.getElementById("message-container");
    const h3 = document.createElement("h3");
    h3.innerText = person.message;
    y.appendChild(h3);
};
x();

const y = () => { 
    document.getElementById("ps1").innerHTML = person.result[0].name.common;
    document.getElementById("ps2").innerHTML = person.result[1].name.common;
    document.getElementById("ps1-age").innerHTML = person.result[0].age;
    document.getElementById("ps2-age").innerHTML = person.result[1].age;
    document.getElementById("ps1-street").innerHTML = person.result[0].address.street;
    document.getElementById("ps2-street").innerHTML = person.result[0].address.street;
}
y();