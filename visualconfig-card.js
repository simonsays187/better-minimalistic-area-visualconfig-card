class WrapperCard extends HTMLElement {
  setConfig(config) {
    this._config = config;

    const card = document.createElement('better-minimalistic-area-card');
    card.setConfig(config);
    this.innerHTML = '';
    this.appendChild(card);
  }

  set hass(hass) {
    this._hass = hass;
    if (this.firstChild) this.firstChild.hass = hass;
  }

  getCardSize() {
    return 3;
  }

  static async getConfigElement() {
  await import('./visualconfig-card-editor.js');
  return document.createElement('better-minimalistic-area-visualconfig-card-editor');
  }

}

customElements.define('better-minimalistic-area-visualconfig-card', WrapperCard);
