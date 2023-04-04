abstract class Vehicle {
    private make: string;
    private model: string;
    private year: number;
    private rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    isRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): void {
      if (this.isRented()) {
        console.log(`${this.getMake()} ${this.getModel()} is already rented.`);
      } else {
        this.setRented(true);
        console.log(`Renting ${this.getMake()} ${this.getModel()}.`);
      }
    }
  
    return(): void {
      if (this.isRented()) {
        this.setRented(false);
        console.log(`Returning ${this.getMake()} ${this.getModel()}.`);
      } else {
        console.log(`${this.getMake()} ${this.getModel()} has not rented.`);
      }
    }
  }
  
  class Car extends Vehicle {
    private color: string;
  
    constructor(make: string, model: string, year: number, rented: boolean, color: string) {
      super(make, model, year, rented);
      this.color = color;
    }
  
    rentalRate(): number {
      return 50; 
    }
  
    getColor(): string {
      return this.color;
    }
  }
  
  class Truck extends Vehicle {
    private maxLoad: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, maxLoad: number) {
      super(make, model, year, rented);
      this.maxLoad = maxLoad;
    }
  
    rentalRate(): number {
      return 200; 
    }
  
    getMaxLoad(): number {
      return this.maxLoad;
    }
  }
  
  class Motorcycle extends Vehicle {
    private engineSize: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 100; 
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  
  const car = new Car("Changan", "alsvin", 2020, false, "white");
  car.rent(); 
  car.return(); 
  
  const truck = new Truck("Tesla", "Truck", 2022, false, 5000);
  truck.rent(); 
  truck.rent(); 
  truck.return(); 
  
  const motorcycle = new Motorcycle("Suzuki", "gs-150", 2015, false, 150);
  motorcycle.rent(); 
  motorcycle.return(); 