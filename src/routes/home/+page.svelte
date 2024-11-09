<!-- src/routes/home/+page.svelte -->
<script>
    import './home.css';
</script>

<h1>Welcome to the Home Page!</h1>
<p>This is the main landing page of your application.</p>

<div class="button-container">
    <button class="circle-button">Fire</button>
    <button class="circle-button">Medical</button>
    <button class="circle-button">Police</button>
    <button class="circle-button">Others</button>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: center;
        gap: 20px; /* Space between buttons */
        margin-top: 20px; /* Space above the buttons */
    }

    .circle-button {
        width: 100px; /* Width of the button */
        height: 100px; /* Height of the button */
        border-radius: 50%; /* Makes the button circular */
        border: none; /* Removes default border */
        background-color: #007BFF; /* Button color */
        color: white; /* Text color */
        font-size: 16px; /* Font size */
        cursor: pointer; /* Pointer cursor on hover */
        transition: background-color 0.3s; /* Smooth background color transition */
    }

    .circle-button:hover {
        background-color: #0056b3; /* Darker shade on hover */
    }
</style>