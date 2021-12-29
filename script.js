const typ = document.getElementById('typ')
const pesel = document.getElementById('pesel')
const nip = document.getElementById('nip')
const firmaError = document.getElementById('firmaError')
const osobaError = document.getElementById('osobaError')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let message = []
    osobaError.innerText = ''
    firmaError.innerText = ''

    if (isOsoba(typ.value)) {
        if (pesel.value.length !== 11) {
            message.push('Pesel musi zawierać 11 cyfr')
        }
    } else {
        if (nip.value.length !== 10) {
            message.push('NIP musi zawierać 10 cyfr')
        }
    }

    if (message.length > 0) {
        e.preventDefault()

        if (isOsoba(typ.value)) {
            osobaError.innerText = message.join(',')
        } else {
            firmaError.innerText = message.join(',')
        }
    }
})

function handleTypChange(select) {
    if (isOsoba(select.value)) {
        nip.disabled = true
        pesel.disabled = false
    } else {
        pesel.disabled = true
        nip.disabled = false
    }
}

function isOsoba(value) {
    return value === 'osoba'
}