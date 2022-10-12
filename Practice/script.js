// const domElementId = document.getElementById('Section3');

//       const domByTagName = document.getElementsByTagName('ul');

//       const domClassName = document.getElementsByClassName('group5');

//       console.log(domElementId);

//       console.log(domClassName);

//       domClassName[2].innerHTML = 'group5 : learning';

    // const group5 = document.querySelector("#Section3 .group5");
    // value = group5.getAttribute("class")
    // group5.innerHTML = value + " : Learninggg";

    const group = document.querySelector("#Section3 .group5")
    const classname = group.getAttribute("class")
    group.textContent = classname + ":"+ " สองทุ่มเเจกัน"