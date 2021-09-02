const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

const color = [
    'blue',
    'orange',
    'purple'
];

const iconsContainer = document.getElementById('icons-container');
const select = document.getElementById('type');


print(icons, iconsContainer);

getTypes(icons);

// Milestone 1

function print(array,container) {
    container.innerHTML = '';

    array.forEach((element) => {
        const { name, family, prefix, color } = element;
        iconsContainer.innerHTML += `
        <div class="icons">
            <div>
                <i class="${family} ${prefix + name}" style="color: ${colorIcons(element)}"></i>
                <div class= "title">${name}</div>
            </div>  
        </div>
        `;
    });
}

// Milenstone 2

function colorIcons(element) {
    const types = getTypes();
    const indexType = types.indexOf(element.type);
    return color[indexType];
}

function getTypes() {
    const types = [];
    icons.forEach((element) => {
        if(!types.includes(element.type)) {
            types.push(element.type);
        }
    });

    return types;
}


//Milenstone 3

function printOptions(array, select) {
    array.forEach((element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    });
}

coloredArray(icons, colors);
print(icons, iconsContainer);

selectOptions(select, getType(icons));

select.onchange = (e) => {
    console.log(e);
    const filteredArray = icons.filter((element) => {
        if(element.type === e.target.value) {
            return true;
        }
        return false
    }); 

    print(filteredArray, iconsContainer);
    if (e.target.value === ""){
        print(icons, iconsContainer);
    }
}







