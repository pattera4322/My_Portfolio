const sStorage = () => {
  let sessionVisit = sessionStorage.getItem("sessionVisit");
  if (sessionVisit === null || sessionVisit === "") {
    sessionStorage.setItem("sessionVisit", "Unknown");
  }

  const submitBtn = document.getElementById("submit");
  submitBtn.onclick = function submitHandler() {
    let User = document.getElementById("User");
    sessionStorage.setItem("sessionVisit", User.value);
    if (User.value !== "") {
      pUser.textContent = "Welcome  " + User.value + " to this Website";
    } else pUser.textContent = "Welcome  Unknown to this Website";
  };

  const pUser = document.getElementById("Userid");
  let sessionVisit1 = sessionStorage.getItem("sessionVisit");
  pUser.textContent = "Welcome  " + sessionVisit1 + " to this Website";

  alert(`Mr. / Miss. / Ms. / Mrs. ${sessionStorage.getItem("sessionVisit")}`);
};

const lStorage = () => {
  //เป็นการเช็ค theme ที่ทำการเก็บไว้ใน local storage ว่าเป็น theme อะไรให้เปลี่ยนตามนั้น
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
  //เรียกปุ่มมาใส่ฟังก์ชันเปลี่ยน theme
  var party = document.getElementById("colorBT");
  party.addEventListener("click", changeTheme);

  //ฟังก์ชันไว้สำหรับ set theme ที่รับเข้ามา 
  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.body.className = themeName;
  }

  //ฟังก์ชันไว้เปลี่ยน theme
  function changeTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  }
};
export { sStorage, lStorage };
