const addBtn = document.getElementById('add');
const listAdd = document.getElementById('listAdd');
const lists = document.querySelector('.lists');

const popUp = document.querySelector('.popup');
const popUpText = document.getElementById('popUpText');
const xmark = document.querySelector('.fa-xmark');



let listUpdateActive = false;

addBtn.addEventListener('click', () => {
    
    function days(day) {
        switch(day) {
            case 1:
                return "Monday";
            break;
            case 2:
                return "Tuesday";
            break;
            case 3:
                return "Wednesday";
            break;
            case 4:
                return "Thursday";
            break;
            case 5:
                return "Friday";
            break;
            case 6:
                return "Saturday";
            break;
            case 7:
                return "Sunday";
            break;
        }
    }

    let date = new Date();
    
    if(listAdd.style.display == 'inline-block' && listAdd.value != '') {


        var newDiv = document.createElement('div');
        newDiv.setAttribute('title', days(date.getDay()) + " / " + date.getDate() + " / " + date.getFullYear() + " | " + date.getHours() +":"+ date.getMinutes());
        newDiv.className = 'list';

        var icon_1 = document.createElement('i')
        icon_1.className = 'fa-solid fa-pen-to-square';
        var icon_2 = document.createElement('i')
        icon_2.className = 'fa-solid fa-trash';
        var paragraph = document.createElement('p');
        paragraph.textContent = listAdd.value;
        let inpField;


        icon_1.addEventListener('click', () => {
            if(!listUpdateActive) {
            paragraph.style.display = 'none';
            inpField = document.createElement('input');
            newDiv.insertBefore(inpField, icon_2);
            inpField.value = paragraph.textContent;
            icon_2.className = 'fa-solid fa-check';
            icon_2.style.color = '#63c7ee';
            listUpdateActive = true;
            inpField.id = 'inpField';
            } 
            else {
                PopUp('List updating already in process...')
            }
        });
        icon_2.addEventListener('click', () => {
            if(listUpdateActive && inpField.value != '') {
                paragraph.textContent = inpField.value;
                paragraph.style.display = 'block';
                inpField.remove();
                listUpdateActive = false;
                icon_2.className = 'fa-solid fa-trash';
                icon_2.style.color = '#f64a4a';
            }
            else if (listUpdateActive && inpField.value === '') {
                PopUp('Input field cannot be empty.')
            }
            else {
            newDiv.remove();
            }
        });

        
        
        lists.appendChild(newDiv);
        newDiv.appendChild(icon_1);
        newDiv.appendChild(paragraph);
        newDiv.appendChild(icon_2);

        listAdd.style.display = 'none';
        listAdd.value = '';

    }
    else if (listAdd.style.display == 'inline-block' && listAdd.value === '') {
        PopUp('Input field cannot be empty.')
    }
    else {   
        listAdd.style.display = 'inline-block';
    }

    
    function PopUp(text) {
        popUp.style.display = 'flex';
        popUp.style.opacity = '1';
        setAfterElement("animation", "loadUp 5s ease");
        popUpText.textContent = text;
        setTimeout(() => {
          popUp.style.animation = 'disappear 5s ease forwards';
          setTimeout(() => {
            popUp.style.display = 'none';
          }, 5000);
        }, 100);
      }
      
      
    });

    xmark.addEventListener('click', () => {
        popUp.style.display = 'none';
    });
    
function setAfterElement(property, value) {
    const element = document.querySelector('.popup');
    const afterElement = window.getComputedStyle(element, ':after');

    const afterStyle = document.createElement('style');
    afterStyle.innerHTML = `
        .popup::after {
            ${property}: ${value};
        }
    `;
    document.head.appendChild(afterStyle);
}
