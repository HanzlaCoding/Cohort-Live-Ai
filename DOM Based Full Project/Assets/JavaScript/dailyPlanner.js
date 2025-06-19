const hours = Array.from({ length: 18 }, (_, index) => index);
const plannedSlots = document.querySelector('#taskSlotsClutter');
const tasks = JSON.parse(localStorage.getItem("tasks")) || {};


renderCards = () => {
    let wholeDaySum = '';

hours.forEach((elem, id) => {
    wholeDaySum += `<div id="taskSlot">
                <p class="time whitespace-nowrap text-gray-400 absolute z-10 p-2 text-xs">${id + 6 < 12 ? id + 6 : id + 6 - 12}:00 - ${id + 7 < 12 ? id + 7 : id + 7 - 12}:00 ${id + 6 < 12 ? "AM" : "PM"}</p>
                <input id=${id} type="text" id="todo-input" placeholder="Add Task for this hour"
                class="min-w-130 text-lg outline-none pt-6 px-2 rounded-t-md bg-gray-800 text-zinc-200 border-b-1 border-zinc-400" value="${tasks[id] || ''}">
            </div>`
});

plannedSlots.innerHTML = wholeDaySum;
}

renderCards();

const planInput = document.querySelectorAll('#taskSlotsClutter #taskSlot input');

planInput.forEach((elem, id) => {
    elem.addEventListener('input', (e) => {
        tasks[id] = e.target.value;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
});
console.log(tasks);
