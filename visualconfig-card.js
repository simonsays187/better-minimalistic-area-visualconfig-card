class BetterMinimalisticAreaVisualconfigCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config;
    this._entities = config.entities || [];
    this.render();
  }

  getConfig() {
    return {
      title: this.querySelector('#title')?.value,
      area: this.querySelector('#area')?.value,
      image: this.querySelector('#image')?.value,
      camera_image: this.querySelector('#camera_image')?.value,
      camera_view: this.querySelector('#camera_view')?.value,
      icon: this.querySelector('#icon')?.value,

      shadow: this.querySelector('#shadow')?.checked,
      show_area_icon: this.querySelector('#show_area_icon')?.checked,
      darken_image: this.querySelector('#darken_image')?.checked,
      hide_unavailable: this.querySelector('#hide_unavailable')?.checked,
      state_color: this.querySelector('#state_color')?.checked,
      force_dialog: this.querySelector('#force_dialog')?.checked,
      show_state: this.querySelector('#show_state')?.checked,
      show_name: this.querySelector('#show_name')?.checked,
      show_last_changed: this.querySelector('#show_last_changed')?.checked,
      show_buttons: this.querySelector('#show_buttons')?.checked,
      show_sensors: this.querySelector('#show_sensors')?.checked,
      show_entities_names: this.querySelector('#show_entities_names')?.checked,
      show_entities_icons: this.querySelector('#show_entities_icons')?.checked,
      show_entities_state: this.querySelector('#show_entities_state')?.checked,
      show_entities_unit: this.querySelector('#show_entities_unit')?.checked,
      show_entities_attribute: this.querySelector('#show_entities_attribute')?.checked,
      show_entities_secondary_info: this.querySelector('#show_entities_secondary_info')?.checked,

      style: {
        color: this.querySelector('#color')?.value,
        sensors_color: this.querySelector('#sensors_color')?.value,
        sensors_icon_size: this.querySelector('#sensors_icon_size')?.value,
        sensors_button_size: this.querySelector('#sensors_button_size')?.value,
        buttons_color: this.querySelector('#buttons_color')?.value,
        buttons_icon_size: this.querySelector('#buttons_icon_size')?.value,
        buttons_button_size: this.querySelector('#buttons_button_size')?.value,
        background_color: this.querySelector('#background_color')?.value,
        shadow_color: this.querySelector('#shadow_color')?.value,
      },

      tap_action: {
        action: this.querySelector('#tap_action')?.value,
        navigation_path: this.querySelector('#navigation_path')?.value,
      },

      align: {
        title: this.querySelector('#align_title')?.value,
        sensors: this.querySelector('#align_sensors')?.value,
        buttons: this.querySelector('#align_buttons')?.value,
        title_entities: this.querySelector('#align_title_entities')?.value,
      },

      entities: this._entities.map((_, i) => ({
      entity: this.querySelector(`#entity-${i}`)?.value,
      color: this.querySelector(`#color-${i}`)?.value,
    })),

    };
  }

  _renderSwitch(id, label) {
    const checked = this._config[id] ?? false;
    return `
      <div style="margin: 8px 0;">
        <label for="${id}">${label}</label>
        <ha-switch id="${id}" ?checked=${checked}></ha-switch>
      </div>
    `;
  }

  _renderSelect(id, label, options, selected) {
    return `
      <ha-select label="${label}" id="${id}">
        ${options.map(opt => `
          <option value="${opt}" ?selected=${selected === opt}>${opt}</option>
        `).join('')}
      </ha-select>
    `;
  }

  render() {
    this.innerHTML = `
      <div class="section">
        <h2>Allgemein</h2>
        <ha-textfield label="Titel" id="title" value="${this._config.title || ''}"></ha-textfield>
        <ha-textfield label="Bereich" id="area" value="${this._config.area || ''}"></ha-textfield>
        <ha-textfield label="Bild" id="image" value="${this._config.image || ''}"></ha-textfield>
        <ha-textfield label="Kamera-Entity" id="camera_image" value="${this._config.camera_image || ''}"></ha-textfield>
        ${this._renderSelect('camera_view', 'Kamera-Ansicht', ['auto', 'live'], this._config.camera_view)}
        <ha-textfield label="Icon" id="icon" value="${this._config.icon || ''}"></ha-textfield>
      </div>

      <div class="section">
        <h2>Darstellung</h2>
        ${this._renderSwitch('shadow', 'Schatten')}
        ${this._renderSwitch('show_area_icon', 'Bereichs-Icon anzeigen')}
        ${this._renderSwitch('darken_image', 'Bild abdunkeln')}
        ${this._renderSwitch('hide_unavailable', 'Nicht verfügbare ausblenden')}
        ${this._renderSwitch('state_color', 'HA-Farben aktivieren')}
        ${this._renderSwitch('force_dialog', 'Dialog erzwingen')}
        ${this._renderSwitch('show_state', 'Zustand anzeigen')}
        ${this._renderSwitch('show_name', 'Name anzeigen')}
        ${this._renderSwitch('show_last_changed', 'Letzte Änderung anzeigen')}
        ${this._renderSwitch('show_buttons', 'Buttons anzeigen')}
        ${this._renderSwitch('show_sensors', 'Sensoren anzeigen')}
        ${this._renderSwitch('show_entities_names', 'Entitätsnamen anzeigen')}
        ${this._renderSwitch('show_entities_icons', 'Entitätsicons anzeigen')}
        ${this._renderSwitch('show_entities_state', 'Entitätszustand anzeigen')}
        ${this._renderSwitch('show_entities_unit', 'Einheit anzeigen')}
        ${this._renderSwitch('show_entities_attribute', 'Attribut anzeigen')}
        ${this._renderSwitch('show_entities_secondary_info', 'Sekundäre Info anzeigen')}
      </div>

      <div class="section">
        <h2>Style</h2>
        <ha-textfield label="Farbe" id="color" value="${this._config.style?.color || ''}"></ha-textfield>
        <ha-textfield label="Sensorfarbe" id="sensors_color" value="${this._config.style?.sensors_color || ''}"></ha-textfield>
        <ha-textfield label="Sensor-Icon-Größe" id="sensors_icon_size" value="${this._config.style?.sensors_icon_size || ''}"></ha-textfield>
        <ha-textfield label="Sensor-Button-Größe" id="sensors_button_size" value="${this._config.style?.sensors_button_size || ''}"></ha-textfield>
        <ha-textfield label="Buttonfarbe" id="buttons_color" value="${this._config.style?.buttons_color || ''}"></ha-textfield>
        <ha-textfield label="Button-Icon-Größe" id="buttons_icon_size" value="${this._config.style?.buttons_icon_size || ''}"></ha-textfield>
        <ha-textfield label="Button-Größe" id="buttons_button_size" value="${this._config.style?.buttons_button_size || ''}"></ha-textfield>
        <ha-textfield label="Hintergrundfarbe" id="background_color" value="${this._config.style?.background_color || ''}"></ha-textfield>
        <ha-textfield label="Schattenfarbe" id="shadow_color" value="${this._config.style?.shadow_color || ''}"></ha-textfield>
      </div>

      <div class="section">
        <h2>Aktionen</h2>
        ${this._renderSelect('tap_action', 'Tap Action', ['navigate', 'toggle', 'call-service'], this._config.tap_action?.action)}
        <ha-textfield label="Navigation Path" id="navigation_path" value="${this._config.tap_action?.navigation_path || ''}"></ha-textfield>
      </div>

      <div class="section">
        <h2>Ausrichtung</h2>
        ${this._renderSelect('align_title', 'Titel-Ausrichtung', ['left', 'center', 'right'], this._config.align?.title)}
        ${this._renderSelect('align_sensors', 'Sensor-Ausrichtung', ['left', 'center', 'right'], this._config.align?.sensors)}
        ${this._renderSelect('align_buttons', 'Button-Ausrichtung', ['left', 'center', 'right'], this._config.align?.buttons)}
        ${this._renderSelect('align_title_entities', 'Titel-Entitäten-Ausrichtung', ['left', 'center', 'right'], this._config.align?.title_entities)}
      </div>

      <div class="section">
        <h2>Entitäten</h2>
        <div id="entities-list">
          ${this._entities.map((e, i) => `
            <div class="entity-row" style="margin-bottom: 8px;">
              <ha-entity-picker id="entity-${i}" value="${e.entity || ''}"></ha-entity-picker>
              <ha-textfield id="color-${i}" label="Farbe" value="${e.color || ''}"></ha-textfield>
              <button id="remove-${i}">Entfernen</button>
            </div>
          `).join('')}
        </div>
        <button id="add-entity">+ Entität hinzufügen</button>
      </div>
    `;

    this.querySelector('#add-entity')?.addEventListener('click', () => {
      this._entities.push({ entity: '' });
      this.render();
    });
    this.querySelector('#add-entity')?.addEventListener('click', () => {
    this._entities.push({ entity: '', color: '' });
    this.render();
  });

  this._entities.forEach((_, i) => {
    this.querySelector(`#remove-${i}`)?.addEventListener('click', () => {
      this._entities.splice(i, 1);
      this.render();
    });
  });

  }
}

customElements.define('better-minimalistic-area-visualconfig-card-editor', BetterMinimalisticAreaVisualconfigCardEditor);

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
