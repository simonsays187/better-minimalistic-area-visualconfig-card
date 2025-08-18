class BetterMinimalisticAreaVisualconfigCard extends HTMLElement {
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
  return document.createElement('better-minimalistic-area-visualconfig-card-editor');
  }

}

customElements.define('better-minimalistic-area-visualconfig-card', BetterMinimalisticAreaVisualconfigCard);


class BetterMinimalisticAreaVisualconfigCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
    this.render();
  }

  render() {
    this.innerHTML = `
      <ha-textfield label="Titel" value="${this._config.title || ''}" id="title"></ha-textfield>
      <ha-textfield label="Bereich" value="${this._config.area || ''}" id="area"></ha-textfield>
    `;
  }

  getConfig() {
    return {
      title: this.querySelector('#title').value,
      area: this.querySelector('#area').value,
    };
  }
}

customElements.define('better-minimalistic-area-visualconfig-card-editor', BetterMinimalisticAreaVisualconfigCardEditor);