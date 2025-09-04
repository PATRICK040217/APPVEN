const users = {
  "KFCADM": "KFCADM123",
  "KFCUSER": "KFCUSER"
};

let currentUser = null;

// Datos iniciales con FILETE en todos los días
const defaultData = {
  "LUNES": [
    { item: "ETC x MALL", consumo: "25", debo: "3", obs: "" },
    { item: "RO x MALL", consumo: "10", debo: "1", obs: "" },
    { item: "TENDER x BOLSA", consumo: "2.5", debo: "4", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "11", debo: "15", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "4", debo: "6", obs: "" },
    { item: "HOTWING x MALLA", consumo: "10.4", debo: "14", obs: "" },
    { item: "KRUNCHY x UND", consumo: "70", debo: "7", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ],
  "MARTES": [
    { item: "ETC x MALL", consumo: "25", debo: "3", obs: "" },
    { item: "RO x MALL", consumo: "10", debo: "1", obs: "" },
    { item: "TENDER x BOLSA", consumo: "4.5", debo: "6", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "11", debo: "15", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "3", debo: "5", obs: "" },
    { item: "HOTWING x MALLA", consumo: "4.2", debo: "7", obs: "" },
    { item: "KRUNCHY x UND", consumo: "70", debo: "7", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ],
  "MIÉRCOLES": [
    { item: "ETC x MALL", consumo: "70", debo: "6", obs: "" },
    { item: "RO x MALL", consumo: "30", debo: "3", obs: "" },
    { item: "TENDER x BOLSA ", consumo: "2.5", debo: "4", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "12", debo: "16", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "4.5", debo: "6", obs: "" },
    { item: "HOTWING x MALLA", consumo: "5.1", debo: "8", obs: "" },
    { item: "KRUNCHY x UND", consumo: "70", debo: "7", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ],
  "JUEVES": [
    { item: "ETC x MALL ", consumo: "30", debo: "3", obs: "" },
    { item: "RO x MALL ", consumo: "15", debo: "2", obs: "" },
    { item: "TENDER x BOLSA", consumo: "3.8", debo: "6", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "12", debo: "16", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "3", debo: "5", obs: "" },
    { item: "HOTWING x MALLA", consumo: "4.7", debo: "8", obs: "" },
    { item: "KRUNCHY x UND", consumo: "70", debo: "7", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ],
  "VIERNES": [
    { item: "ETC x MALL", consumo: "35", debo: "4", obs: "" },
    { item: "RO x MALL", consumo: "15", debo: "2", obs: "" },
    { item: "TENDER x BOLSA", consumo: "4.8", debo: "8", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "14", debo: "20", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "5", debo: "7", obs: "" },
    { item: "HOTWING x MALLA", consumo: "7.3", debo: "11", obs: "" },
    { item: "KRUNCHY x UND", consumo: "100", debo: "10", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ],
  "SÁBADO": [
    { item: "ETC x MALL ", consumo: "45", debo: "5", obs: "" },
    { item: "RO x MALL ", consumo: "25", debo: "3", obs: "" },
    { item: "TENDER x BOLSA", consumo: "5.1", debo: "8", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "20", debo: "28", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "4.5", debo: "7", obs: "" },
    { item: "HOTWING x MALLA", consumo: "8.1", debo: "12", obs: "" },
    { item: "KRUNCHY x UND", consumo: "100", debo: "10", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ],
  "DOMINGO": [
    { item: "ETC x MALL", consumo: "45", debo: "4", obs: "" },
    { item: "RO x MALL", consumo: "20", debo: "2", obs: "" },
    { item: "TENDER x BOLSA", consumo: "4.9", debo: "8", obs: "" },
    { item: "NUGGET x BOLSA", consumo: "15", debo: "22", obs: "" },
    { item: "POPCORN x BOLSA", consumo: "5", debo: "7", obs: "" },
    { item: "HOTWING x MALLA", consumo: "7.4", debo: "11", obs: "" },
    { item: "KRUNCHY x UND", consumo: "100", debo: "10", obs: "" },
    { item: "FILETE x UND", consumo: "-", debo: "-", obs: "" }
  ]
};

let consumoData = JSON.parse(localStorage.getItem("consumoData")) || defaultData;

// Login
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (users[username] && users[username] === password) {
    currentUser = username;
    document.getElementById("loginContainer").classList.add("hidden");
    document.getElementById("appContainer").classList.remove("hidden");

    if (currentUser === "KFCADM") {
      document.getElementById("saveBtn").classList.remove("hidden");
      document.getElementById("resetBtn").classList.remove("hidden");
    } else {
      document.getElementById("saveBtn").classList.add("hidden");
      document.getElementById("resetBtn").classList.add("hidden");
    }

    renderTable();
  } else {
    document.getElementById("loginError").innerText = "Usuario o contraseña incorrectos";
  }
}

// Logout
function logout() {
  currentUser = null;
  document.getElementById("loginContainer").classList.remove("hidden");
  document.getElementById("appContainer").classList.add("hidden");
  document.getElementById("loginError").innerText = "";
  document.getElementById("loginForm").reset();
}

// Renderizar tabla
function renderTable() {
  const day = document.getElementById("daySelect").value;
  const data = consumoData[day];

  let html = `<table>
                <tr>
                  <th>ITEM</th>
                  <th>CONSUMO</th>
                  <th>DEBO TENER</th>
                  <th>OBSERVACIONES</th>
                </tr>`;

  data.forEach((row, index) => {
    if (currentUser === "KFCADM") {
      html += `<tr>
                <td>${row.item}</td>
                <td><input type="text" value="${row.consumo}" onchange="updateData('${day}', ${index}, 'consumo', this.value)"></td>
                <td><input type="text" value="${row.debo}" onchange="updateData('${day}', ${index}, 'debo', this.value)"></td>
                <td><input type="text" value="${row.obs}" onchange="updateData('${day}', ${index}, 'obs', this.value)"></td>
              </tr>`;
    } else {
      html += `<tr>
                <td>${row.item}</td>
                <td>${row.consumo}</td>
                <td>${row.debo}</td>
                <td>${row.obs}</td>
              </tr>`;
    }
  });

  html += `</table>`;
  document.getElementById("tableContainer").innerHTML = html;
}

// Actualizar datos
function updateData(day, index, field, value) {
  consumoData[day][index][field] = value;
}

// Guardar cambios
function saveChanges() {
  localStorage.setItem("consumoData", JSON.stringify(consumoData));
  alert("Datos guardados correctamente.");
}

// Restaurar datos originales
function resetData() {
  if (confirm("¿Seguro que deseas restaurar la tabla original? Se perderán los cambios.")) {
    consumoData = JSON.parse(JSON.stringify(defaultData));
    localStorage.setItem("consumoData", JSON.stringify(consumoData));
    renderTable();
    alert("La tabla ha sido restaurada a los valores originales.");
  }
}
