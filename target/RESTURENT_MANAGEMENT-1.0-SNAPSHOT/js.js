

    // Search functionality
    function filterOrders() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('completedOrdersTable');
    const rows = table.getElementsByTagName('tr');
    const noOrdersRow = document.getElementById('no-orders-row');
    let visibleCount = 0;

    // Hide the no-orders-row during search
    if (noOrdersRow) {
    noOrdersRow.style.display = 'none';
}

    // Loop through all table rows except the header
    for (let i = 1; i < rows.length; i++) {
    // Skip the header and any error rows
    if (rows[i].id === 'no-orders-row') continue;

    const rowText = rows[i].textContent || rows[i].innerText;
    if (rowText.toUpperCase().indexOf(filter) > -1) {
    rows[i].style.display = "";
    visibleCount++;
} else {
    rows[i].style.display = "none";
}
}

    // Show the no-orders-row if no results
    if (visibleCount === 0 && noOrdersRow) {
    noOrdersRow.style.display = '';
}
}

    // Date filter functionality
    function filterByDate() {
    const select = document.getElementById('dateFilter');
    const filterValue = select.value;
    const table = document.getElementById('completedOrdersTable');
    const rows = table.getElementsByTagName('tr');
    const noOrdersRow = document.getElementById('no-orders-row');
    let visibleCount = 0;

    // Hide the no-orders-row during filtering
    if (noOrdersRow) {
    noOrdersRow.style.display = 'none';
}

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const yesterday = today - (24 * 60 * 60 * 1000);
    const weekAgo = today - (7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()).getTime();

    // Loop through all table rows except the header
    for (let i = 1; i < rows.length; i++) {
    // Skip the header and any error rows
    if (rows[i].id === 'no-orders-row') continue;

    const rowDate = parseInt(rows[i].getAttribute('data-date'));
    let showRow = false;

    switch(filterValue) {
    case 'all':
    showRow = true;
    break;
    case 'today':
    showRow = rowDate >= today;
    break;
    case 'yesterday':
    showRow = rowDate >= yesterday && rowDate < today;
    break;
    case 'week':
    showRow = rowDate >= weekAgo;
    break;
    case 'month':
    showRow = rowDate >= monthAgo;
    break;
}

    if (showRow) {
    rows[i].style.display = "";
    visibleCount++;
} else {
    rows[i].style.display = "none";
}
}

    // Show the no-orders-row if no results
    if (visibleCount === 0 && noOrdersRow) {
    noOrdersRow.style.display = '';
}
}