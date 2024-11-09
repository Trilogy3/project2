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
        text-align: center;
        font-family: Arial, sans-serif;
    }

    h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: white;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 30px;
        color: #ccc;
    }

    .button-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .button {
        padding: 15px;
        font-size: 1.2em;
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
        transition: background-color 0.3s, transform 0.2s;
    }

    .button.red {
        background-color: #e74c3c;
    }

    .button.red:hover {
        background-color: #c0392b;
        transform: translateY(-2px);
    }

    .button.yellow {
        background-color: #f1c40f;
        color: black;
    }

    .button.yellow:hover {
        background-color: #e0b90f;
        transform: translateY(-2px);
    }

    .button.green {
        background-color: #2ecc71;
    }

    .button.green:hover {
        background-color: #27ae60;
        transform: translateY(-2px);
    }
</style>

<div class="container">
    <h1>Status Page</h1>
    <p>Indicate your current status by selecting an option below:</p>

    <div class="button-container">
        <button class="button red" on:click={handleHelp}>I need help!</button>
        <button class="button yellow" on:click={handleSafeButInjured}>Safe but injured</button>
        <button class="button green" on:click={handleImOk}>I'm ok</button>
    </div>
</div>
