const sections = document.querySelectorAll('.section');
const lists = document.querySelectorAll('.list');

function handleIntersection(entries) {
  entries.forEach(entry => {
    const index = entry.target.dataset.index;
    const list = document.querySelector(`.list-${index}`);

    if (entry.isIntersecting) {
      list.classList.add('mark');
    } else {
      list.classList.remove('mark');
    }
  });
}

const options = {
  threshold: 0.5 // Adjust this value to change the visibility threshold
};

const observer = new IntersectionObserver(handleIntersection, options);

sections.forEach((section, index) => {
  section.dataset.index = index + 1;
  observer.observe(section);
});