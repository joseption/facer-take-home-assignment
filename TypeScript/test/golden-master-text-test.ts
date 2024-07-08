import { Item, FacerStore } from '../app/facer-store';

const items = [
  // JA - Renamed from "Seiko Watch" to match snapshot
  new Item("+5 Dexterity Vest", 10, 20), //
  /*
    JA - Updated snapshot to reflect a quality increase
    rate of 1 instead of 2, as per unspecified instructions
  */
  new Item("Vintage Rolex", 2, 0), //
  // JA - Renamed from "Casio Watch" to match snapshot
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Legendary Watch Face", 0, 80), //
  new Item("Legendary Watch Face", -1, 80),
  new Item("Passes to Watchface Conference", 15, 20),
  new Item("Passes to Watchface Conference", 10, 49),
  new Item("Passes to Watchface Conference", 5, 49),
  /*
    JA - Renamed from "Fragile Watch" to match snapshot
    and updated snapshot to reflect a quality decrease rate
    of 2 instead of 1, as specified in the instructions
  */
  new Item("Fragile", 3, 6)];


  const facerStore = new FacerStore(items);

  let days: number = 2;
  if (process.argv.length > 2) {
      days = +process.argv[2];
    }
  
  for (let i = 0; i < days + 1; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
      console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);
  
    });
    console.log();
    facerStore.updateQuality();
  }