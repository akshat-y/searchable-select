const countries = [
    'India', 'America', 'Austria', 'China', 'Argentina', 'Canada', 'Brazil', 'Australia',
]

function setSelectOptions(data = countries){
    const selectOptions = document.getElementById('search-select-filtered-options')
    selectOptions.textContent = ''
    
    if(data.length < 1){
        let option = document.createElement('li')        
        option.innerHTML = `<a class="dropdown-item disabled" href="#">No match</a>`
        selectOptions.appendChild(option)
        
    }

    for(let i = 0; i < data.length; i++){    
        let option = document.createElement('li')    
        option.innerHTML = `<a class="dropdown-item" onclick="selectCountry('${data[i]}')" href="#">${data[i]}</a>`
        selectOptions.appendChild(option)
    }
}

function selectCountry(country){
    document.getElementById('dropdownBtn').children[0].textContent = country;    
}

function filterData(value){
    var filtered = countries.filter( country => country.toLowerCase().includes(value.toLowerCase()) );
    setSelectOptions(filtered)
}