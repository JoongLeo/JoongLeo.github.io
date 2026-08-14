function sortPublications(criteria) {
    const container = document.getElementById('publications');
    const publications = Array.from(container.getElementsByClassName('publication'));

    publications.sort((a, b) => {
        if (criteria === 'author') {
            if (a.getAttribute('data-author') === 'Jihong Li' && b.getAttribute('data-author') !== 'Jihong Li') {
                return -1;
            } else if (a.getAttribute('data-author') !== 'Jihong Li' && b.getAttribute('data-author') === 'Jihong Li') {
                return 1;
            } else {
                return b.getAttribute('data-date') - a.getAttribute('data-date');
            }
        } else if (criteria === 'date') {
            return b.getAttribute('data-date') - a.getAttribute('data-date');
        }
    });

    publications.forEach(pub => {
        container.appendChild(pub);
        // Add gray overlay to non-first-author publications
        if (criteria === 'author' && pub.getAttribute('data-author') !== 'Jihong Li') {
            pub.classList.add('gray-overlay');
        } else {
            pub.classList.remove('gray-overlay');
        }
    });

    // Toggle active class
    document.getElementById('sort-author').classList.toggle('active', criteria === 'author');
    document.getElementById('sort-date').classList.toggle('active', criteria === 'date');
}

document.addEventListener('DOMContentLoaded', function() {
    sortPublications('date');
});
