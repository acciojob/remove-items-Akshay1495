//your JS code here. If required.

document.querySelector('input[type="button"][value="Select and Remove"]').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    colorSelect.remove(colorSelect.selectedIndex);
});

