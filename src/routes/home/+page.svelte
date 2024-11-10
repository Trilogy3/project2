<script>
    import './home.css';

    /**
   * @param {string} type
   */
    function handleButtonClick(type) {
        alert(`${type} emergency hotline called!`);
        // Replace alert with actual call functionality
    }
</script>

<div class="emergency-container">
    <h2>Emergency Hotline</h2>
    <div class="button-container">
        <button class="circle-button fire-button" on:click={() => handleButtonClick('Fire')}>Fire</button>
        <button class="circle-button medical-button" on:click={() => handleButtonClick('Medical')}>Medical</button>
        <button class="circle-button police-button" on:click={() => handleButtonClick('Police')}>Police</button>
        <button class="circle-button others-button" on:click={() => handleButtonClick('Others')}>Others</button>
    </div>
</div>
