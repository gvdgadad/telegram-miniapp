function openCase(price) {
  document.getElementById("cases").style.display = "none";
  document.getElementById("result").classList.remove("hidden");

  // Эмуляция выпадения
  const drops = {
    25: {name: 'USP "Chameleon"', value: 19},
    50: {name: 'AKR12 "4 Years"', value: 55},
    75: {name: 'F/S "Venom"', value: 45},
    100: {name: 'M16 "Sea Glint"', value: 150},
    500: {name: 'F/S "Hellspawn"', value: 700}
  };

  const drop = drops[price] || {name: "Неизвестный дроп", value: 0};
  document.getElementById("dropName").textContent = drop.name;
  document.getElementById("dropValue").textContent = "💰 Цена: " + drop.value + " G";
}

function addToInventory() {
  Telegram.WebApp.showAlert("✅ Скин добавлен в инвентарь!");
}

function claimGold() {
  Telegram.WebApp.showAlert("💰 Голда зачислена на баланс!");
}