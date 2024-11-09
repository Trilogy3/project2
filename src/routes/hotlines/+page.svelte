<script>
    // You can define any specific logic for the hotlines page here
    const hotlines = [
        {
            name: "East Bajac-Bajac Fire and Rescue",
            number: "0917-436-5998",
            description: "For fire emergencies and rescue services."
        },
        {
            name: "Old Cabalan Quick Emergency Response",
            number: "603-1700",
            description: "For quick response to emergencies and urgent assistance."
        },
        {
            name: "SBMA Fire Department",
            number: "252-4830",
            description: "For fire safety and emergency services in the SBMA area."
        },
        {
            name: "Gordon Heights Fire & Rescue",
            number: "223-5497",
            description: "For immediate fire and rescue assistance."
        },
        {
            name: "City Hall Olongapo",
            number: "222-2565",
            description: "For municipal services and local government inquiries."
        }
    ];
</script>

<style>
    .hotline-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color: #333; /* Optional: Set a dark background for contrast */
        color: white; /* Optional: Set default text color to white */
    }
    h1 {
        text-align: center;
        color: white; /* Set the color of the h1 to white */
        font-size: 2.5em; /* Make the h1 bigger */
        margin-bottom: 20px; /* Add some space below the h1 */
    }
    p {
        color: white; /* Set the color of the p to white */
        text-align: center; /* Center the paragraph text */
    }
    .hotline {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 0;
        background-color: #444; /* Slightly lighter background for hotline boxes */
        text-align: center; /* Center the text within the hotline box */
    }
    .hotline h2 {
        margin: 0;
        color: #007BFF; /* Keep hotline names colored for emphasis */
    }
    .hotline p {
        margin: 5px 0;
        color: white; /* Ensure hotline description is white */
    }
</style>

<div class="hotline-container">
    <h1>Hotlines</h1>
    <p>If you need assistance, please contact the appropriate hotline below:</p>
    
    {#each hotlines as hotline}
        <div class="hotline">
            <h2>{hotline.name}</h2>
            <p><strong>Phone Number:</strong> {hotline.number}</p>
            <p>{hotline.description}</p>
        </div>
    {/each}
</div>