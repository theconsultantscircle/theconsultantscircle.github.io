$(document).ready(() => {
    render_projects('board');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/fatima.jpg',
            link: 'https://www.linkedin.com/in/fatima-elzahra-khan',
            title: 'Fatima Khan',
            technologies: ['Board'],
            description: "Final year Chemical Engineering student at Imperial.",
            categories: ['board']
        },
        
        {
            image: 'assets/images/fatima.jpg',
            link: 'https://www.linkedin.com/in/fatima-elzahra-khan',
            title: 'Fatima Khan',
            technologies: ['Associate'],
            description: "Final year Chemical Engineering student at Imperial.",
            categories: ['outreach']
        },
        
           {
            image: 'assets/images/fatima.jpg',
            link: 'https://www.linkedin.com/in/fatima-elzahra-khan',
            title: 'Fatima Khan',
            technologies: ['Director'],
            description: "Final year Chemical Engineering student at Imperial.",
            categories: ['programme']
        },
        
           {
            image: 'assets/images/fatima.jpg',
            link: 'https://www.linkedin.com/in/fatima-elzahra-khan',
            title: 'Fatima Khan',
            technologies: ['Events'],
            description: "Final year Chemical Engineering student at Imperial.",
            categories: ['events']
        },
        
           {
            image: 'assets/images/fatima.jpg',
            link: 'https://www.linkedin.com/in/fatima-elzahra-khan',
            title: 'Fatima Khan',
            technologies: ['Marketing'],
            description: "Final year Chemical Engineering student at Imperial.",
            categories: ['marketing']
        },
       
      
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
