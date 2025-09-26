import { APP_VERSION } from "../../app-properties.js";
import { onNewGameClick } from "../main.js";
import { getSvgIcon } from "./icons.service.js";
import { getUser, setUser } from "./storage.service..js";

export function getSettingsDom() {
  return `
    <h2>Thème</h2>
    <div id="themesContainer" class="themes-container">
    ${getThemesDom()}
    </div>
    <hr>
    <h2>Nouvelle partie</h2>
    <button class="lzr-button lzr-solid lzr-error" style="width: 100%;" onclick="onNewGameButtonClick()">Nouvelle partie</button>
  `;
}

export function getThemesDom() {
  let user = getUser();
  return `
    <div onclick="onThemeClick('light')" class="theme-bloc light ${user.UI_THEME == 'light' ? 'selected' : ''}">
      <div class="title"></div>
      <div class="bloc">
        <div class="bloc-title"></div>
        <div class="bloc-text"></div>
        <div class="bloc-text"></div>
      </div>
      <div class="bloc">
        <div class="bloc-title"></div>
        <div class="bloc-text"></div>
        <div class="bloc-text"></div>
      </div>
    </div>

    <div onclick="onThemeClick('dark')" class="theme-bloc dark ${user.UI_THEME == 'dark' ? 'selected' : ''}">
      <div class="title"></div>
      <div class="bloc">
        <div class="bloc-title"></div>
        <div class="bloc-text"></div>
        <div class="bloc-text"></div>
      </div>
      <div class="bloc">
        <div class="bloc-title"></div>
        <div class="bloc-text"></div>
        <div class="bloc-text"></div>
      </div>
    </div>

    ${user.CURRENT_FLAIR !== null && user.CURRENT_FLAIR.id == 'FL_OFF_04' ? `
      <div onclick="onThemeClick('official')" class="theme-bloc official ${user.UI_THEME == 'official' ? 'selected' : ''}">
        <div class="title"></div>
        <div class="bloc">
          <div class="bloc-title"></div>
          <div class="bloc-text"></div>
          <div class="bloc-text"></div>
        </div>
        <div class="bloc">
          <div class="bloc-title"></div>
          <div class="bloc-text"></div>
          <div class="bloc-text"></div>
        </div>
      </div>
    ` : ''}

    ${user.CURRENT_FLAIR !== null && user.CURRENT_FLAIR.id == 'FL_BLA_04' ? `
      <div onclick="onThemeClick('unofficial')" class="theme-bloc unofficial ${user.UI_THEME == 'unofficial' ? 'selected' : ''}">
        <div class="title"></div>
        <div class="bloc">
          <div class="bloc-title"></div>
          <div class="bloc-text"></div>
          <div class="bloc-text"></div>
        </div>
        <div class="bloc">
          <div class="bloc-title"></div>
          <div class="bloc-text"></div>
          <div class="bloc-text"></div>
        </div>
      </div>
      </div>
    ` : ''}
  `;
}

export function updateThemesContainer() {
  document.getElementById('themesContainer').innerHTML = getThemesDom();
}

export function onThemeClick(theme) {
  let user = getUser();
  if (user.UI_THEME != theme) {
    user.UI_THEME = theme;
    setUser(user);
    document.getElementsByClassName('lzr')[0].style = `--theme: '${user.UI_THEME}';`;
    updateThemesContainer();
  }
}
window.onThemeClick = onThemeClick;

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