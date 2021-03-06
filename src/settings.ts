import {
  FormatType,
  Options,
  optionsWithDefaults,
} from '@tgrosinger/md-advanced-tables';

export const defaultSettings: Partial<ISettings> = {
  formatType: FormatType.NORMAL,
  showRibbonIcon: true,
  useMonospaceFont: true,
  preferredMonospaceFont: '',
  bindEnter: true,
  bindTab: true,
};

export interface ISettings {
  formatType: FormatType;
  showRibbonIcon: boolean;
  useMonospaceFont: boolean;
  preferredMonospaceFont: string;
  bindEnter: boolean;
  bindTab: boolean;
}

export class TableEditorPluginSettings implements ISettings {
  public formatType: FormatType;
  public showRibbonIcon: boolean;

  public useMonospaceFont: boolean;
  public preferredMonospaceFont: string;

  public bindEnter: boolean;
  public bindTab: boolean;

  constructor(loadedData: Partial<ISettings>) {
    const allFields = { ...defaultSettings, ...loadedData };
    this.formatType = allFields.formatType;
    this.showRibbonIcon = allFields.showRibbonIcon;
    this.useMonospaceFont = allFields.useMonospaceFont;
    this.preferredMonospaceFont = allFields.preferredMonospaceFont;
    this.bindEnter = allFields.bindEnter;
    this.bindTab = allFields.bindTab;
  }

  public asOptions(): Options {
    return optionsWithDefaults({ formatType: this.formatType });
  }
}
