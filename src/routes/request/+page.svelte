<script>
    let disasterType = '';
    let fullName = '';
    let contactNumber = '';
    let location = '';
    let nearestLandmark = '';
    let numberOfPeople = '';
    let description = '';
    let isConsentGiven = false;

    // Disaster-specific information
    let injuryDetails = '';
    let immediateNeeds = '';
    let structuralDamage = '';
    let trappedPeople = false;

    const handleSubmit = () => {
        if (!fullName || !contactNumber || !location || !disasterType || !description || !isConsentGiven) {
            alert("Please fill in all required fields and consent to share information.");
            return;
        }

        // Handle form submission logic here
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

    import './request.css';
</script>

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