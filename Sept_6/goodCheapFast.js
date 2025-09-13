const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');

function enforceRule(changedSwitch) {
    const selected = [good, cheap, fast].filter(s => s.checked);

    // If 3 are active, uncheck the one that wasn't just changed
    if (selected.length > 2) {
        selected.find(s => s !== changedSwitch).checked = false;
    }
}

// Add event listeners to all toggles
[good, cheap, fast].forEach(toggle => {
    toggle.addEventListener('change', () => enforceRule(toggle));
});
