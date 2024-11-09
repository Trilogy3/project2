<script>
    // You can define any specific logic for the hotlines page here
    const hotlines = [
        {
            name: "Customer Support",
            number: "1-800-123-4567",
            description: "For general inquiries and support."
        },
        {
            name: "Technical Support",
            number: "1-800-234-5678",
            description: "For technical issues and troubleshooting."
        },
        {
            name: "Billing Inquiries",
            number: "1-800-345-6789",
            description: "For questions related to billing and payments."
        },
        {
            name: "Emergency Services",
            number: "911",
            description: "For immediate assistance in emergencies."
        },
        {
            name: "Mental Health Support",
            number: "1-800-456-7890",
            description: "For mental health resources and support."
        }
    ];
</script>

<style>
    .hotline-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    h1 {
        text-align: center;
        color: #333;
    }
    .hotline {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 15px;
        margin: 10px 0;
        background-color: #f9f9f9;
    }
    .hotline h2 {
        margin: 0;
        color: #007BFF;
    }
    .hotline p {
        margin: 5px 0;
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