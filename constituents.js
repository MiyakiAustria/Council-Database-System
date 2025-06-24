const input = document.getElementById('memberInput');
const addBtn = document.getElementById('addMemberBtn');
const memberList = document.getElementById('memberList');

// Function to add a member
function addMember() {
  const memberName = input.value.trim();

  if (memberName !== '') {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = memberName;
    span.classList.add('member-name');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Edit button logic
    editBtn.addEventListener('click', function () {
      const newName = prompt('Edit member name:', span.textContent);
      if (newName !== null && newName.trim() !== '') {
        span.textContent = newName.trim();
      }
    });

    // Delete button logic
    deleteBtn.addEventListener('click', function () {
      memberList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    memberList.appendChild(li);

    input.value = ''; // Clear input
  }
}

// Trigger add on button click
addBtn.addEventListener('click', addMember);

// Trigger add on Enter key press
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addMember();
  }
});
