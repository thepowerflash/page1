const peoplesBlock = document.querySelector('.peoples');
async function fetchData() {
   
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=56');
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
  
      const data = await response.json();
  
      data.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('card');
        personCard.innerHTML = `
          <img src="https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=1024x1024&w=is&k=20&c=-AdIwLn-nIYlgctc95CZuJHnkku_ia-f8A8m2LFwl2A=" alt="">
          <h3>${person.title}</h3>
          <span> ${person.body}</span>
        `;
        peoplesBlock.append(personCard);
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchData();