export class Item {
    name: string;
    sellIn: number;
    quality: number;
  
    constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
  export class FacerStore {
    items: Array<Item>;
  
    constructor(items = [] as Array<Item>) {
      this.items = items;
    }
  
    // Run loop to update the properties of all watches
    updateQuality() {
      for (let item of this.items) {
        this.updateWatchProps(item);
      }

      return this.items;
    }
  
    /*
      Update the quality of an individual watch
      by adjusting sellIn and quality, and validating
      the quality within allowed bounds
    */
    updateWatchProps(item: Item) {
      if (item.name === 'Legendary Watch Face') {
        return;
      }
  
      this.updateSellIn(item);
  
      switch (item.name) {
        case 'Vintage Rolex':
          this.updateVintageRolexWatch(item);
          break;
        case 'Passes to Watchface Conference':
          this.updatePassesToWatchfaceConference(item);
          break;
        case 'Fragile':
          this.updateFragileWatch(item);
          break;
        default:
          this.updateRegularWatch(item);
          break;
      }
  
      this.validateQuality(item);
    }
  
    // Decrease the sellIn value by 1
    updateSellIn(item: Item) {
      item.sellIn -= 1;
    }
  
    // Increase quality by 1 up to a maximum of 50
    updateVintageRolexWatch(item: Item) {
      if (item.quality < 50) {
        item.quality += 1;
      }
    }
  
    /*
      Update the quality of Passes to Watchface Conference:
      - If sellIn < 0, set quality to 0
      - If sellIn < 5, increase quality by 3
      - If sellIn < 10, increase quality by 2
      - Otherwise, increase quality by 1
    */
    updatePassesToWatchfaceConference(item: Item) {
      if (item.sellIn < 0) {
        item.quality = 0;
      } else if (item.sellIn < 5) {
        item.quality += 3;
      } else if (item.sellIn < 10) {
        item.quality += 2;
      } else {
        item.quality += 1;
      }
    }
  
    // Decrease quality of Fragile watch by 2
    updateFragileWatch(item: Item) {
      item.quality -= 2;
    }
  
    /*
      Decrease quality of regular watches:
      - If sellIn < 0, decrease quality by 2
      - Otherwise, decrease quality by 1
    */
    updateRegularWatch(item: Item) {
      item.quality -= item.sellIn < 0 ? 2 : 1;
    }
  
    /*
      Validate the quality of the watch:
      - Ensure quality is never below 0
      - Ensure quality does not exceed 50, except for 'Legendary Watch Face'
    */
    validateQuality(item: Item) {
      if (item.quality < 0) {
        item.quality = 0;
      }
      if (item.quality > 50 && item.name !== 'Legendary Watch Face') {
        item.quality = 50;
      }
    }
  }