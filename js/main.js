class TeamMember {
    constructor(firstName, lastName, role, githubUsername, githubLink, image) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.githubUsername = githubUsername;
        this.githubLink = githubLink;
        this.image = image;
    }
}

function compare(a, b) {
    let aLastName = a.lastName.toUpperCase();
    let bLastName = b.lastName.toUpperCase();

    let comparison = 0;
    if(aLastName > bLastName) {
        comparison = 1;
    } else if(aLastName < bLastName) {
        comparison = -1;
    }

    return comparison;
}



//Create team members
let sean = new TeamMember('Sean', 'Hockin', 'UI Design', 'shockin779', 'https://github.com/shockin779', 'img/ps4.jpg');
let chris = new TeamMember('Chris', 'Vasquez', 'UI Design', 'chrvasq', 'https://github.com/chrvasq', 'img/camera.jpg');
let tony = new TeamMember('Tony', 'Walker', 'UI Design', 'TonyCWalker', 'https://github.com/TonyCWalker', 'img/computer.jpg');
let seong = new TeamMember('Seong', 'Kim', 'Front-End Architect', 'seongck', 'https://github.com/seongck', 'img/tablet.jpg');
let julian = new TeamMember('Julian', 'Yates', 'Front-End Architect', 'Julian2323', 'https://github.com/Julian2323', 'img/tv.jpg');
let jonathan = new TeamMember('Jonathan', 'Picazo', 'Project Manager', 'macjabeth', 'https://github.com/macjabeth', 'img/music.jpg');

let team = [sean, chris, tony, seong, julian, jonathan];

// Sort the team by last name
let teamSorted = team.sort(compare);


// Grab the members div
let membersSection = document.querySelector('.members');

//Check to make sure we are on the about us page
if(membersSection) {
    // Loop through each team member and add them to the about us page
    // *** Also a reusable component. You can add as many team members as you want to the list and it will work.
    teamSorted.forEach(function(member) {

        let tempLink = document.createElement('a');
        tempLink.setAttribute('href', `${member.githubLink}`);
        tempLink.setAttribute('target', '_blank');


        tempLink.innerHTML = `
            <div class="team-member card">
                <img src="${member.image}" alt="Picture of team member ${member.firstName} ${member.lastName}" />
                <div class="member-info">
                    <h3>${member.firstName} ${member.lastName}</h3>
                    <p>${member.role}</p>
                    <p>GitHub Handle: <a href="${member.githubLink}" target="_blank">${member.githubUsername}</a>
                    </p>
                </div>
            </div>`;

        membersSection.append(tempLink);
        // let tempDiv = document.createElement('div');
        // tempDiv.classList.add('team-member');
        // tempDiv.classList.add('card');
        // tempDiv.innerHTML = `<img src="${member.image}" alt="Picture of team member ${member.firstName} ${member.lastName}">
        // <div class="member-info">
        //     <h3>${member.firstName} ${member.lastName}</h3>
        //     <p>${member.role}</p>
        //     <p>Github Handle: <a href="${member.githubLink}" target="_blank">${member.githubUsername}</a></p>`;

        // membersSection.append(tempDiv);
    })
}


// // Grab the hamburger icon
let hamburger = document.querySelector('header i');

// // Get header nav
let headerNav = document.querySelector('header nav');


hamburger.addEventListener('click', function(e) {
    headerNav.classList.toggle('visible');
});

// Grab email submit button
let emailButton = document.querySelector('.email-signup button');

//Make sure emailButton exists
if(emailButton) {
    emailButton.addEventListener('mouseenter', function(e) {
        e.target.style.opacity = 0.9;
    });

    emailButton.addEventListener('mouseleave', e => e.target.style.opacity = 1);
}
