import { APP_VERSION } from "../../app-properties.js";
import { onNewGameClick } from "../main.js";
import { getSvgIcon } from "./icons.service.js";

export function getSettingsDom() {
  return `
  <button class="lzr-button lzr-solid lzr-error" style="width: 100%;" onclick="onNewGameButtonClick()">Nouvelle partie</button>
  `;
}

export function onNewGameButtonClick() {
  let popUp = document.getElementById('popUp');
  document.getElementById('popUpRessourceTitle').innerHTML = `<span class="txt-error">Nouvelle partie</span>`;
  document.getElementById('popUpRessourceName').innerHTML = `<span></span>`;
  document.getElementById('popUpRessourceAsk').innerHTML = `<span></span><span class="txt-primary"></span>`;
  document.getElementById('popUpBody').innerHTML = `
    <p>Voulez-vous vraiment lancer une nouvelle partie ?</p>
    <p class="txt-error">Cette action est définitive et irréversible, et écrasera définitivement votre sauvegarde actuelle.</p>
    
    <button class="lzr-button lzr-solid lzr-error" style="margin-top: auto;" onclick="onConfirmNewGameClick()">Confirmer</button>
  `;

  popUp.classList.remove('hidden');
}
window.onNewGameButtonClick = onNewGameButtonClick;

export function onConfirmNewGameClick() {
  onNewGameClick();
}
window.onConfirmNewGameClick = onConfirmNewGameClick;