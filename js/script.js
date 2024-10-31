window.addEventListener('load', () => {
    let form = document.getElementById('empForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let values = {
            id: form.id.value, 
            name: form.name.value, 
            ext: form.ext.value, 
            email: form.email.value, 
            department: form.department.value
        }
        console.log(values)
    })
})