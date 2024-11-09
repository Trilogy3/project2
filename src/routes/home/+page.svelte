<!-- src/routes/home/+page.svelte -->
<script>
    import './home.css';
</script>

<div class="button-container">
    <button class="circle-button fire-button">Fire</button>
    <button class="circle-button medical-button">Medical</button>
    <button class="circle-button police-button">Police</button>
    <button class="circle-button others-button">Others</button>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: center;
        gap: 30px; /* Increased space between buttons */
        margin-top: 20px; /* Space above the buttons */
    }

    .circle-button {
        width: 120px; /* Increased width for better aesthetics */
        height: 120px; /* Increased height for better aesthetics */
        border-radius: 50%; /* Makes the button circular */
        border: none; /* Removes default border */
        color: white; /* Text color */
        font-size: 18px; /* Increased font size */
        font-weight: bold; /* Bold text */
        cursor: pointer; /* Pointer cursor on hover */
        transition: transform 0.2s, box-shadow 0.2s; /* Smooth transform and shadow transition */
        display: flex; /* Center text */
        align-items: center; /* Center text vertically */
        justify-content: center; /* Center text horizontally */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
    }

    .fire-button {
        background-color: #FF5733; /* Fire button color */
    }

    .medical-button {
        background-color: #28A745; /* Medical button color */
    }

    .police-button {
        background-color: #007BFF; /* Police button color */
    }

    .others-button {
        background-color: #FFC107; /* Others button color */
    }

    .circle-button:hover {
        transform: translateY(-3px); /* Slight lift on hover */
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Deeper shadow on hover */
    }
</style>