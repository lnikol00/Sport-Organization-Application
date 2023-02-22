import { type } from "@testing-library/user-event/dist/type";

export const inputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Upišite ime",
        errorMessage: "Ime mora imati izmeđju 3-16 znakova i ne smije uključivati znakove ili brojeve!",
        label: "Ime",
        pattern: "^[A-Za-z]{3,16}?$",
        required: true,
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "Upišite prezime",
        errorMessage: "Ima mora imati izmeđju 3-16 znakova i ne smije uključivati znakove ili brojeve!",
        label: "Prezime",
        pattern: "^[A-Za-z]{3,16}?$",
        required: true,
    },
    {
        id: 3,
        name: "date",
        type: "date",
        placeholder: "",
        min: "1997-01-01",
        max: "2030-12-31",
        errorMessage: "Neispravan datum!",
        label: "Datum rođenja",
        required: true,
    },
    {
        id: 4,
        name: "",
        type: "address",
        placeholder: "Upišite adresu na koju želite dostavu",
        errorMessage: "Morate unijeti adresu",
        label: "Adresa",
        required: true,
    },
    {
        id: 5,
        name: "cardNumber",
        type: "tel",
        placeholder: "xxxx - xxxx -xxxx -xxxx",
        errorMessage: "Broj kartice mora sadržavati samo 16 brojeva!",
        label: "Broj kartice",
        pattern: "^4[0-9]{12}(?:[0-9]{3})?$",
        maxlenght: '19',
        required: true,
    },
    {
        id: 6,
        name: "ccvNumber",
        type: "tel",
        placeholder: "xxx",
        errorMessage: "CCV broj mora sadržavati samo 3 broja!",
        label: "CCV",
        pattern: "^[0-9]{3}$",
        required: true,
    },
    {
        id: 7,
        name: "dateNumber",
        type: "tel",
        placeholder: "mm/yy",
        errorMessage: "Datum kartice neispravan!",
        label: "Datum isteka",
        pattern: "^(0[1-9]|1[0-2])\/?([0-9]{2})$",
        required: true,
    },
]