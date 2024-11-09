<script>
    // Define the button click handlers
    function handleHelp() {
        alert('Help is on the way!');
    }

    function handleSafeButInjured() {
        alert('Stay safe and seek help if needed.');
    }

    function handleImOk() {
        alert('Glad to hear you are okay!');
    }
</script>

<style>
    /* Container for the entire content */
    .container {
        display: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Full height of the viewport */
        padding: 40px; /* Increased padding around the content */
        background-color: #1e1e1e; /* Darker background for a more professional look */
        border-radius: 10px; /* Rounded corners for the container */
        box-shadow: 0 6px 30px rgba(0, 0, 0, 0.6); /* Deeper shadow for more depth */
        color: white; /* White text for better contrast */
        font-family: 'Arial', sans-serif; /* Clean font */
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        text-align: center; /* Centered title */
    }

    p {
        font-size: 1.2em;
        margin-bottom: 30px;
        text-align: center; /* Centered paragraph */
        line-height: 1.5; /* Improved line height for readability */
    }

    .button-container {
        display: flex;
        justify-content: center; /* Center buttons horizontally */
        gap: 30px; /* Increased space between buttons */
        flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
    }

    .button {
        padding: 15px 25px; /* Adjusted padding for better sizing */
        font-size: 1.2em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s; /* Smooth background color and transform */
        font-weight: bold; /* Bold text for buttons */
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow for buttons */
    }

    .button.red {
        background-color: #e74c3c; /* Red for "I need help!" */
        color: white;
    }

    .button.red:hover {
        background-color: #c0392b; /* Darker red on hover */
        transform: translateY(-2px); /* Lift effect on hover */
    }

    .button.yellow {
        background-color: #f1c40f; /* Yellow for "Safe but injured" */
        color: black;
    }

    .button.yellow:hover {
        background-color: #e0b90f; /* Darker yellow on hover */
        transform: translateY(-2px); /* Lift effect on hover */
    }

    .button.green {
        background-color: #2ecc71; /* Green for "I'm ok" */
        color: white;
    }

    .button.green:hover {
        background-color: #27ae60; /* Darker green on hover */
        transform: translateY(-2px); /* Lift effect on hover */
    }
</style>

<div class="container">
    <h1>Status Page</h1>
    <p>This page provides the current status of various functionalities.</p>

    <div class="button-container">
        <button class="button red" on:click={handleHelp}>I need help!</button>
        <button class="button yellow" on:click={handleSafeButInjured}>Safe but injured</button>
        <button class="button green" on:click={handleImOk}>I'm ok</button>
    </div>
</div>