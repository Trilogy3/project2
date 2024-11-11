<script>
    let disasterType = '';
    let fullName = '';
    let contactNumber = '';
    let location = '';
    let nearestLandmark = '';
    let numberOfPeople = '';
    let description = '';
    let isConsentGiven = false;

    let injuryDetails = '';
    let immediateNeeds = '';
    let structuralDamage = '';
    let trappedPeople = false;

    const handleSubmit = () => {
        if (!fullName || !contactNumber || !location || !disasterType || !description || !isConsentGiven) {
            alert("Please fill in all required fields and consent to share information.");
            return;
        }

        console.log("Disaster Request Data:", {
            fullName,
            contactNumber,
            location,
            nearestLandmark,
            disasterType,
            description,
            numberOfPeople,
            injuryDetails,
            immediateNeeds,
            structuralDamage,
            trappedPeople,
            isConsentGiven
        });

        alert("Your request has been submitted successfully!");
    };
</script>

<style>
/* Base Reset for full viewport and styling */
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    background-color: #f5f5f5;
    box-sizing: border-box;
}

/* Form container */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #333;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    width: 100%;
    margin: 40px auto;
    transition: padding 0.3s ease, margin 0.3s ease;
}

/* Title styling */


/* Form Section styling */
.form-section {
    width: 100%;
    margin-bottom: 1.5rem;
}

label {
    font-weight: 600;
    color: #444;
    margin-bottom: 0.5rem;
    display: block;
}

/* Input, textarea, select styling */
input[type="text"],
input[type="number"],
select,
textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
    font-size: 1rem;
    color: #555;
    transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="number"]:focus,
select:focus,
textarea:focus {
    border-color: #4caf50;
    outline: none;
}

/* Checkbox and label styling */
input[type="checkbox"] {
    margin-right: 10px;
}

label input[type="checkbox"] {
    margin-right: 8px;
}

/* Submit button styling */
button[type="submit"] {
    width: 100%;
    padding: 14px;
    background-color: #4caf50;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
    background-color: #45a049;
    transform: scale(1.02);
}

button[type="submit"]:focus {
    outline: none;
}

/* Desktop Responsiveness */
@media (min-width: 1024px) {
    .container {
        max-width: 800px;
        padding: 3rem;
    }

    h1 {
        font-size: 2.5rem;
    }

    input[type="text"],
    input[type="number"],
    select,
    textarea,
    button[type="submit"] {
        padding: 1rem;
        font-size: 1.2rem;
    }
}

/* Tablet Responsiveness */
@media (max-width: 1024px) and (min-width: 601px) {
    .container {
        padding: 2.5rem;
    }

    h1 {
        font-size: 2.25rem;
    }

    input[type="text"],
    input[type="number"],
    select,
    textarea,
    button[type="submit"] {
        padding: 0.9rem;
        font-size: 1.1rem;
    }
}

/* Mobile Responsiveness */
@media (max-width: 600px) {
    .container {
        padding: 1.5rem;
        margin: 20px;
    }

    h1 {
        font-size: 1.75rem;
    }

    input[type="text"],
    input[type="number"],
    select,
    textarea,
    button[type="submit"] {
        padding: 0.75rem;
        font-size: 1rem;
    }
}
.navbar {
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for separation */
}
</style>

<div class="container">
    <form on:submit|preventDefault={handleSubmit}>
        <!-- General Information -->
        <div class="form-section">
            <label for="fullName">Full Name *</label>
            <input type="text" id="fullName" bind:value={fullName} required />

            <label for="contactNumber">Contact Number *</label>
            <input type="text" id="contactNumber" bind:value={contactNumber} required />

            <label for="location">Location *</label>
            <input type="text" id="location" bind:value={location} required />

            <label for="nearestLandmark">Nearest Landmark (Optional)</label>
            <input type="text" id="nearestLandmark" bind:value={nearestLandmark} />

            <label for="disasterType">Type of Disaster *</label>
            <select id="disasterType" bind:value={disasterType} required>
                <option value="">Select Disaster Type</option>
                <option value="flood">Flood</option>
                <option value="earthquake">Earthquake</option>
                <option value="typhoon">Typhoon</option>
                <option value="landslide">Landslide</option>
                <option value="fire">Fire</option>
                <option value="other">Other</option>
            </select>

            <label for="description">Description of the Situation *</label>
            <textarea id="description" bind:value={description} required></textarea>
        </div>

        <!-- Additional Details for Disaster Readiness -->
        <div class="form-section">
            <label for="numberOfPeople">Number of People Affected</label>
            <input type="number" id="numberOfPeople" bind:value={numberOfPeople} min="1" />

            <label for="injuryDetails">Injuries or Medical Needs</label>
            <textarea id="injuryDetails" bind:value={injuryDetails}></textarea>

            <label for="immediateNeeds">Immediate Needs (e.g., food, water, shelter)</label>
            <textarea id="immediateNeeds" bind:value={immediateNeeds}></textarea>

            <label for="structuralDamage">Description of Structural Damage</label>
            <textarea id="structuralDamage" bind:value={structuralDamage}></textarea>

            <label><input type="checkbox" bind:checked={trappedPeople} /> Are there any trapped individuals?</label>
        </div>

        <!-- Consent Checkbox -->
        <div class="form-section">
            <label><input type="checkbox" bind:checked={isConsentGiven} /> I consent to share this information with emergency responders *</label>
        </div>

        <!-- Submit Button -->
        <button type="submit">Submit Request</button>
    </form>
</div>
