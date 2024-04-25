const certificationsDiv = document.getElementById('certifications');
const inProgressDiv = document.getElementById('in-progress');

for (let i = 0; i < certificates.length; i++) {
	const certificate = certificates[i];
	const newLi = document.createElement('li');
	newLi.className = 'card';

	newLi.innerHTML = `<div class="text">
    <h4>${certificate.title}</h4>
    <h5>${certificate.school}</h5>
    </div>
    <a href="${certificate.link}" target="_blank"><i class="fas fa-award"></i></a>`;

	certificationsDiv.appendChild(newLi);
}

for (let i = 0; i < inProgress.length; i++) {
	const inProgressCourse = inProgress[i];
	const newLi2 = document.createElement('li');
	newLi2.className = 'card';
	console.log(inProgressCourse);

	newLi2.innerHTML = `<div class="text">
    <h4>${inProgressCourse.title}</h4>
    <h5>${inProgressCourse.school}</h5>
    </div>
    <p>${inProgressCourse.progress}</p>`;

	inProgressDiv.appendChild(newLi2);
}
