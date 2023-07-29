function createUser(event) {
  event.preventDefault();

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'test',
      password: 'password',
      entries: [
        {
          date: '2023-07-30',
          calories: 2000,
          weight: 150,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.querySelector('form').addEventListener('submit', createUser);
