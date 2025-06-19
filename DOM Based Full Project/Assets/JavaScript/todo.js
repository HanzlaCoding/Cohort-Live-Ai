const todoTask = () => {
    const taskList = document.querySelector('#task-list-panel');

    let currentTasks = [];

    if (localStorage.getItem('currentTasks')) {
        currentTasks = JSON.parse(localStorage.getItem('currentTasks'));
    } else {
        console.log('No tasks found in localStorage. Initializing empty tasks array.');
        localStorage.setItem('currentTasks', JSON.stringify([])); // Ensures currentTasks is always an array
    }

    const renderCards = () => {
        if (currentTasks.length === 0) {
            taskList.innerHTML = `<div class="noAvailable">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/021/975/492/small_2x/search-not-found-3d-render-icon-illustration-with-transparent-background-empty-state-png.png" alt="No Tasks" />
                <p>No tasks available. Please add a task.</p>
            </div>`;
        } else {
            let sum = '';

            const important = `<span 
                style="background-color: red; margin-left: 5px; font-size:16px; padding: 2px 8px; border-radius: 20%;">imp</span>`;

            currentTasks.forEach((task, idx) => {
                const { name, details, imp } = task;

                sum += `<div id="task-${idx}" class="task-item">
                    <details>
                        <summary>${name} ${imp ? important : ""}</summary>
                        <p>${details}</p>
                    </details>
                    <button class="mark-completed-btn" data-index="${idx}">Mark as Completed</button>
                </div>`;
            });

            taskList.innerHTML = sum;
            localStorage.setItem('currentTasks', JSON.stringify(currentTasks));
        }
    };

    renderCards();

    const taskBtn = document.querySelector('form');
    const taskInput = document.querySelector('input');
    const taskDetails = document.querySelector('textarea');
    const checkImp = document.querySelector('#mark-important');

    taskBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        currentTasks.push({
            name: taskInput.value,
            details: taskDetails.value,
            imp: checkImp.checked
        });

        taskInput.value = '';
        taskDetails.value = '';
        checkImp.checked = false;

        renderCards();
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('mark-completed-btn')) {
            const indexToRemove = parseInt(e.target.dataset.index);
            currentTasks.splice(indexToRemove, 1);
            console.log(`Task at index ${indexToRemove} marked as completed and removed.`);
            renderCards();
            return;
        }
    });
};

todoTask();