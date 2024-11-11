import { DisasterFormValidator, type DisasterFormData, updateQuantity } from "$lib/formValidator"; // Use DisasterFormData
import { test, expect, describe } from 'vitest';

describe('DisasterFormValidator', () => {
    // Helper function to create valid form data
    const createValidFormData = (): DisasterFormData => ({
        fullName: "John Doe",
        contactNumber: "12345678901",
        location: "123 Main St, Los Angeles, USA",
        disasterType: "flood",
        description: "Flood caused by heavy rain.",
        nearestLandmark: "N/A",
        numberOfPeople: 5,
        injuryDetails: "Minor injuries",
        immediateNeeds: "Food, Water",
        structuralDamage: "Collapsed walls",
        trappedPeople: false,
        isConsentGiven: true
    });

    describe('validateForm', () => {
        test('should return no errors for valid form data', () => {
            const formData = createValidFormData();
            const errors = DisasterFormValidator.validateForm(formData); // Use DisasterFormValidator
            expect(errors).toEqual({});
        });

        test('should validate full name', () => {
            const formData = {
                ...createValidFormData(),
                fullName: "John123"
            };
            const errors = DisasterFormValidator.validateForm(formData); // Use DisasterFormValidator
            expect(errors.fullName).toBe('Full name should only contain letters');
        });

        test('should validate contact number', () => {
            const formData = {
                ...createValidFormData(),
                contactNumber: "123"
            };
            const errors = DisasterFormValidator.validateForm(formData); // Use DisasterFormValidator
            expect(errors.contactNumber).toBe('Contact number must be 11 digits');
        });

        test('should validate description', () => {
            const formData = {
                ...createValidFormData(),
                description: ""
            };
            const errors = DisasterFormValidator.validateForm(formData); // Use DisasterFormValidator
            expect(errors.description).toBe('Description of the situation is required');
        });

        test('should validate disaster type selection', () => {
            const formData = {
                ...createValidFormData(),
                disasterType: ""
            };
            const errors = DisasterFormValidator.validateForm(formData); // Use DisasterFormValidator
            expect(errors.disasterType).toBe('Please select a valid disaster type');
        });

        test('should validate consent given checkbox', () => {
            const formData = {
                ...createValidFormData(),
                isConsentGiven: false
            };
            const errors = DisasterFormValidator.validateForm(formData); // Use DisasterFormValidator
            expect(errors.isConsentGiven).toBe('Consent to share information is required');
        });
    });

    describe('isFormValid', () => {
        test('should return true for empty errors object', () => {
            expect(DisasterFormValidator.isFormValid({})).toBe(true); // Use DisasterFormValidator
        });

        test('should return false when errors exist', () => {
            const errors = {
                fullName: 'Full name should only contain letters'
            };
            expect(DisasterFormValidator.isFormValid(errors)).toBe(false); // Use DisasterFormValidator
        });
    });
});

describe('updateQuantity', () => {
    describe('increase', () => {
        test('should increment quantity by 1', () => {
            expect(updateQuantity.increase(1)).toBe(2);
            expect(updateQuantity.increase(5)).toBe(6);
        });
    });

    describe('decrease', () => {
        test('should decrement quantity by 1 but not below 1', () => {
            expect(updateQuantity.decrease(2)).toBe(1);
            expect(updateQuantity.decrease(5)).toBe(4);
            expect(updateQuantity.decrease(1)).toBe(1); // Should not go below 1
        });
    });
});
