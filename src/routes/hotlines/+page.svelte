<script>
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
    .container {
        background-color: #000;
        color: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        max-width: 500px;
        width: 100%;
        box-sizing: border-box;
        margin: 40px auto;
    }

    h1 {
        text-align: center;
        color: white;
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    .description {
        text-align: center;
        margin-bottom: 20px;
        color: #ccc;
    }

    .hotline {
        border: 1px solid #666;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #333;
        text-align: left;
    }

    .hotline h2 {
        margin: 0;
        font-size: 1.5em;
        color: #4caf50;
    }

    .hotline p {
        margin: 8px 0;
        color: #ddd;
    }

    .hotline .number {
        font-weight: bold;
        color: #bbb;
    }
</style>

<div class="container">
    <h1>Emergency Hotlines</h1>
    <p class="description">If you need assistance, please contact one of the following hotlines:</p>

    {#each hotlines as hotline}
        <div class="hotline">
            <h2>{hotline.name}</h2>
            <p class="number"><strong>Phone Number:</strong> {hotline.number}</p>
            <p>{hotline.description}</p>
        </div>
    {/each}
</div>
