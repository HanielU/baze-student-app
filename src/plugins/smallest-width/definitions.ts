export interface SmallestWidthPlugin {
  /**
   * Gets the devices's smallest width (or innerwidth for web (kinda unneccesary but we'll keep it like this for now))
   */
  getSmallestWidth(): Promise<{ value: number }>;
}
