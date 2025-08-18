class WrapperCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
    this.render();
  }

  render() {
    this.innerHTML = `
      <ha-textfield label="Titel" value="${this._config.title || ''}" id="title"></ha-textfield>
      <ha-textfield label="Bereich" value="${this._config.area || ''}" id="area"></ha-textfield>
      <!-- weitere Felder hier -->
    `;
  }

  getConfig() {
    return {
      title: this.querySelector('#title').value,
      area: this.querySelector('#area').value,
      // weitere Optionen
    };
  }
}

customElements.define('better-minimalistic-area-visualconfig-card-editor', WrapperCardEditor);
