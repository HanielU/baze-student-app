export interface SmallestWidthPlugin {
  /**
   * Gets the devices's smallest width or innerwidth for web
   */
  getSmallestWidth(): Promise<{ value: number }>;
}
