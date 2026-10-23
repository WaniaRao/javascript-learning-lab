   function deleteRow(e) {
    console.log("Delete button clicked");

    const row = e.target.closest("tr");

    row.remove();
}