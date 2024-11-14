export class car {
    constructor(make, model, fueltype, range_km, year, color, mileage_km, description, price) {
        this.make = make;
        this.model = model;
        this.fueltype = fueltype;
        this.range_km = range_km;
        this.year = year;
        this.color = color;
        this.mileage_km = mileage_km;
        this.description = description;
        this.price = price;
    }

    present() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Fuel Type: ${this.fueltype}, Price: ${this.price}`;
    }

    averageKilometersPerYear() {
        const currentYear = new Date().getFullYear();
        const yearsOwned = currentYear - this.year;
        return yearsOwned > 0 ? (this.mileage_km / yearsOwned).toFixed(2) : this.mileage_km;
    }

    averageChargesPerYear() {
        const currentYear = new Date().getFullYear();
        const yearsOwned = currentYear - this.year;
        const averageKilometersPerYear = this.averageKilometersPerYear();
        return yearsOwned > 0 ? (averageKilometersPerYear / this.range_km).toFixed(2) : 0;
    }
}

