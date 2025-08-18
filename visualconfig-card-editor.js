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

customElements.define(
  'better-minimalistic-area-visualconfig-card-editor',
  BetterMinimalisticAreaVisualconfigCardEditor
);
