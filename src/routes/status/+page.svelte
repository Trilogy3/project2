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
    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 40px;
        text-align: center;
    }

    .button-container {
        display: flex;
        gap: 20px; /* Space between buttons */
    }

    .button {
        padding: 15px 30px;
        font-size: 1.2em;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .button.red {
        background-color: #e74c3c; /* Red for "I need help!" */
        color: white;
    }

    .button.red:hover {
        background-color: #c0392b; /* Darker red on hover */
    }

    .button.yellow {
        background-color: #f1c40f; /* Yellow for "Safe but injured" */
        color: black;
    }

    .button.yellow:hover {
        background-color: #e0b90f; /* Darker yellow on hover */
    }

    .button.green {
        background-color: #2ecc71; /* Green for "I'm ok" */
        color: white;
    }

    .button.green:hover {
        background-color: #27ae60; /* Darker green on hover */
    }
</style>

<div>
    <h1>Status Page</h1>
    <p>This page provides the current status of various functionalities.</p>

    <div class="button-container">
        <button class="button red" on:click={handleHelp}>I need help!</button>
        <button class="button yellow" on:click={handleSafeButInjured}>Safe but injured</button>
        <button class="button green" on:click={handleImOk}>I'm ok</button>
    </div>
</div>