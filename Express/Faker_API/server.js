const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const { application } = require("express");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newFake = {
        userId: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: "",
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    };
    newFake.email = faker.internet.email(newFake.firstName, newFake.lastName);
    return newFake;
};

const createCompany = () => {
    const newFake = {
        companyId: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
};

const users = [];
const companies = [];

app.get("/api", (req, res) => {
    res.json({message: "Our express api server is now sending this over to the browser"});
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.post("/api/users/new", (req, res) => {
    users.push(createUser());
    res.json({status: "ok"});
});

app.get("/api/companies", (req, res) => {
    res.json(companies);
});

app.post("/api/companies/new", (req, res) => {
    companies.push(createCompany());
    res.json({status: "ok"});
});

app.post("/api/companies/new", (req, res) => {
    companies.push(createCompany());
    res.json({status: "ok"});
});

app.post("/api/user/company", (req, res) => {
    users.push(createUser());
    companies.push(createCompany());
    res.json({status: "ok"});
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
  