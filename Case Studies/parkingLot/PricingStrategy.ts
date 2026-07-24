import { VehicleType } from "./parking_lot.ts";

interface PricingStrategy {
    calculateFee(hours: number): number;
}

class TwoWheelerPricing implements PricingStrategy {
    calculateFee(hours: number): number {
        return hours * 10;
    }
}

class FourWheelerPricing implements PricingStrategy {
    calculateFee(hours: number): number {
        return hours * 20;
    }
}

class HeavyVehiclePricing implements PricingStrategy {
    calculateFee(hours: number): number {
        return hours * 50;
    }
}

export class PricingFactory {
    createPricing(vehicleType: VehicleType): PricingStrategy {
        switch (vehicleType) {
            case VehicleType.TWO_WHEELER:
                return new TwoWheelerPricing();
            case VehicleType.FOUR_WHEELER:
                return new FourWheelerPricing();
            case VehicleType.HEAVY_VEHICLE:
                return new HeavyVehiclePricing();
            default:
                throw new Error("Invalid vehicle type");
        }
    }
}