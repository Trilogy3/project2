export interface DisasterFormData {
    fullName: string;
    contactNumber: string;
    location: string;
    nearestLandmark?: string;
    disasterType: string;
    description: string;
    numberOfPeople?: number;
    injuryDetails?: string;
    immediateNeeds?: string;
    structuralDamage?: string;
    trappedPeople: boolean;
    isConsentGiven: boolean;
}

export interface DisasterFormErrors {
    fullName?: string;
    contactNumber?: string;
    location?: string;
    disasterType?: string;
    description?: string;
    isConsentGiven?: string;
}

export class DisasterFormValidator {
    private static validateName(name: string): boolean {
        return /^[A-Za-z\s]+$/.test(name);
    }

    private static validatePhone(phone: string): boolean {
        return /^\d{11}$/.test(phone);
    }

    private static validateDisasterType(disasterType: string): boolean {
        const validTypes = ['flood', 'earthquake', 'typhoon', 'landslide', 'fire', 'other'];
        return validTypes.includes(disasterType);
    }

    public static validateForm(formData: DisasterFormData): DisasterFormErrors {
        const errors: DisasterFormErrors = {};

        if (!this.validateName(formData.fullName)) {
            errors.fullName = 'Full name should only contain letters';
        }

        if (!this.validatePhone(formData.contactNumber)) {
            errors.contactNumber = 'Contact number must be 11 digits';
        }

        if (!formData.location) {
            errors.location = 'Location is required';
        }

        if (!this.validateDisasterType(formData.disasterType)) {
            errors.disasterType = 'Please select a valid disaster type';
        }

        if (!formData.description) {
            errors.description = 'Description of the situation is required';
        }

        if (!formData.isConsentGiven) {
            errors.isConsentGiven = 'Consent to share information is required';
        }

        return errors;
    }

    public static isFormValid(errors: DisasterFormErrors): boolean {
        return Object.keys(errors).length === 0;
    }
}

export const updateQuantity = {
    increase: (quantity: number): number => quantity + 1,
    decrease: (quantity: number): number => Math.max(1, quantity - 1)
};
